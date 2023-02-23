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
  const type = useSelector((state) => state.videos.type)
  const videosType = useSelector((state) => state.videos.type)

  const {
    data, isFetching, isLoading, isSuccess,
  } = useGetTotalVideosQuery({ search })

  useEffect(() => {
    setVideoToShow(data)
    setItems(data)
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
    <div className='w-full bg-greydark pt-2 py-20'>
      <div className={`${videoToShow?.length === 0 ? 'hidden' : ''}`}>
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalItems={videoToShow?.length}
          itemsPerPage={12}
        />
      </div>
      {isLoading && isFetching && <div className='container-empty'> ...loading</div>}
      {isSuccess && videoToShow?.length === 0 && (
      <div className='container-empty flex flex-col mt-28 py-6 h-[550px]'>
        Not matches for the search:
        <span className='font-bold my-3 text-5xl'>
          {` ${search}` }
        </span>
        in section:
        <span className='font-bold my-3 text-5xl'>
          {` ${type === '' ? 'all categories' : type} ` }
        </span>
        try again
      </div>
      )}
      <div className={`${videoToShow?.length === 0 ? 'hidden' : ' '} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5  bg-greydark`}>
        {isSuccess && items?.map((item) => (
          <VideoCard
            key={item?.id}
            video={item}
          />
        ))}
      </div>

    </div>

  )
}

export default VideoList
