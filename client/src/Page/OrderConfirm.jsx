import React from 'react'
import { Link } from 'react-router-dom'

const OrderConfirm = ({ confirm }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="flex flex-col items-center space-y-2">
            {confirm ? <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0,0,256,256">
                <g fill="#cd3838" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.681,0 -23,10.319 -23,23c0,12.681 10.319,23 23,23c12.681,0 23,-10.319 23,-23c0,-12.681 -10.319,-23 -23,-23zM33.71,32.29c0.39,0.39 0.39,1.03 0,1.42c-0.2,0.19 -0.45,0.29 -0.71,0.29c-0.26,0 -0.51,-0.1 -0.71,-0.29l-7.29,-7.29l-7.29,7.29c-0.2,0.19 -0.45,0.29 -0.71,0.29c-0.26,0 -0.51,-0.1 -0.71,-0.29c-0.39,-0.39 -0.39,-1.03 0,-1.42l7.29,-7.29l-7.29,-7.29c-0.39,-0.39 -0.39,-1.03 0,-1.42c0.39,-0.39 1.03,-0.39 1.42,0l7.29,7.29l7.29,-7.29c0.39,-0.39 1.03,-0.39 1.42,0c0.39,0.39 0.39,1.03 0,1.42l-7.29,7.29z" /></g></g>
              </svg>}

            {confirm ? <> <h1 className="text-4xl font-bold">Thank You !</h1>
              <p>Thank you for your interest! Check your email for a link to the guide.</p></> : <> <h1 className="text-4xl font-bold capitalize">there is an error!</h1>
              <p className='capitalize'>payment failed . please retry and check details</p></>}
            <a className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <Link to="/" className="text-sm font-medium">
                Home
              </Link>
            </a>
          </div>
        </div>
      </div>

    </>
  )
}

export default OrderConfirm
