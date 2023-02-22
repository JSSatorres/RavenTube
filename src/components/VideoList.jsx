import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'
import { useGetTotalVideosQuery } from '../store/api/videosApi'
import Pagination from './Pagination'

const VideoList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [videoToShow, setVideoToShow] = useState([])
  const [items, setItems] = useState([]);
  const search = useSelector((state) => state.videos.search)
  const videosType = useSelector((state) => state.videos.type)

  const {
    data, isFetching, isLoading, isSuccess,
  } = useGetTotalVideosQuery({ search })

  useEffect(() => {
    setVideoToShow(data)
  }, [data]);

  useEffect(() => {
    if (videosType === '') {
      setVideoToShow(data)
      return
    }
    if (videosType !== '') {
      const videosToShowFilter = data.filter((video) => video.type === videosType)
      setVideoToShow(videosToShowFilter)
    }
  }, [videosType, data]);

  useEffect(() => {
    const videosPerPage = 12;
    const newIndex = (currentPage - 1) * videosPerPage
    setItems(videoToShow?.slice(newIndex, newIndex + videosPerPage))
  }, [currentPage, videoToShow]);

  const onPageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className='w-full h-full bg-greydark pt-2 py-20'>
      {isLoading && isFetching && <div className='container-empty'> ...loading</div>}
      {isSuccess && videoToShow?.length === 0 && <div className='container-empty'> Not matches, try again</div>}
      <div className='h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
        {isSuccess && items?.map((item) => (
          <VideoCard
            key={item?.id}
            video={item}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalItems={videoToShow?.length}
        itemsPerPage={12}
      />
    </div>

  )
}

export default VideoList
