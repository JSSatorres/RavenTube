import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useDeleteVideoByIdMutation, useGetVideoByIdQuery, useGetTotalVideosQuery } from '../store/api/videosApi'

const EditVideo = () => {
  const { videoId } = useParams()
  const { data: video, isLoading } = useGetVideoByIdQuery(videoId)
  const search = useSelector((state) => state.videos.search)
  const { refetch } = useGetTotalVideosQuery({ search })
  const [deleteVideoById] = useDeleteVideoByIdMutation()
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    try {
      await deleteVideoById(id);
      refetch()
      navigate('/home')
    } catch (error) {
      throw new Error(error)
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4'>
      <div type='button'>
        <div className='flex flex-col bg-customdark rounded-lg'>
          <div className='relative w-full sm:w-3/6 h-[200px] sm:h-[300px]  overflow-hidden mx-auto'>
            <ReactPlayer
              video={video}
              width='100%'
              height='100%'
              // eslint-disable-next-line react/jsx-boolean-value
              controls={true}
              url={video.url}
            />
          </div>
          <div className='flex text-white  justify-center gap-5 sm:gap-20 border-b border-t py-5 mt-12 border-[#303030] flex-col sm:flex-row items-center'>
            <div className='flex flex-col ml-3 overflow-hidden'>
              <span className='text-sm font-bold line-clamp-2'>
                {video?.title}
              </span>
              <span className='text-[12px] font-semibold mt-2 text-white/[0.8] flex items-center'>
                {video.channel}
                <BsFillCheckCircleFill className='text-white/[0.7] text-[12px] ml-1' />
              </span>
              <div className='flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden my-1'>
                <span className='truncate'>{video.description}</span>
              </div>
            </div>
            <div className='flex h-12 w-12 rounded-full overflow-hidden mr-2'>
              <img
                className='h-full w-full object-cover'
                src={video.author}
                alt={video.channel}
              />
            </div>
            <div>
              <MdDelete onClick={() => handleDelete(video.id)} className='cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <button
          className='btn-primary w-full sm:w-3/6 mt-5'
          type='button'
          onClick={() => navigate('/home')}
        >
          Home
        </button>
      </div>
    </div>
  )
}

export default EditVideo
