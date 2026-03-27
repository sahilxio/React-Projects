import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../api/photoApi'
import { setError, setLoading, setResults } from '../redux/features/photoSlice'
import { useEffect } from 'react'

const PhotoList = () => {

  const dispatch = useDispatch()
  const { query, loading, error, results } = useSelector((state) => state.photo)

  


  useEffect(() => {
    if (!query) return
    try {

      dispatch(setLoading())

      const getData = async () => {

        let res = await fetchPhotos(query)

        let data = res.map((item) => ({
          id: item.id,
          title: item.alt_description,
          image: item.urls.small,
          type: item.asset_type

        }))

        dispatch(setResults(data))

      }



      getData()
    } catch (error) {
      dispatch(setError(error))
    }

  }, [query, dispatch])

  if (loading) return <p className='flex justify-center items-center font-semibold text-xl h-[70vh] '>Loading...</p>
  if (error) return <p className='flex justify-center items-center font-semibold text-xl h-[70vh]'>Error Fetching....</p>


  return (

    <div>

      <button className='text-sm bg-white px-4 py-2 text-black rounded-lg font-semibold ml-4 mb-3 ' >Result For: {query}</button>

      <div className='grid lg:grid-cols-4 gap-5 p-4  sm:grid-cols-1  '>

        {results.map((item) => (

          <div
            key={item.id}
            className='bg-white rounded-xl overflow-hidden'

          >

            <div>
              <img src={item.image} alt={item.title}
                className='w-full h-48 object-cover'
              />
            </div>

            <div>
             <p className='text-black p-2 font-medium text-sm'>{item.title}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default PhotoList