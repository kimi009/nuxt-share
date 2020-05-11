export default function({ $axios, redirect }) {
  // request interceptor
  $axios.interceptors.request.use(
    (config) => {
      // console.log('axios config')
      // global.console.log(process.env.baseURL)
      config.baseURL = 'http://localhost:6010'
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  $axios.onRequest((config) => {
    // console.log('Making request to ' + config.url)
  })

  // response interceptor
  $axios.interceptors.response.use(
    (response) => {
      const res = response.data
      // global.console.log('响应数据', res)
      if (res.code === 1000) {
        return res.data
      } else {
        redirect('/404')
      }
      return Promise.reject(new Error(res.msg || '响应数据异常'))
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/404')
    } else if (code === 500) {
      redirect('/500')
    }
  })
}
