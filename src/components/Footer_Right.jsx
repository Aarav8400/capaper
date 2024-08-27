import React from 'react'

const Footer_Right = () => {
  return (
    <div className='p-10'>
        
        <div className='w-[200px]'>
            <h1 className='font-semibold text-2xl text-white'>CA</h1>
            <hr className='border-red-400 my-2 border-[1.5px] w-14'/>
            <div className="flex flex-wrap gap-3">
              <img src="/visa.png" alt=""  width={50}/>
              <img src="/visa.png" alt=""  width={50}/>
              <img src="/visa.png" alt=""  width={50}/>
              <img src="/visa.png" alt=""  width={50}/>
              <img src="/visa.png" alt=""  width={50}/>
              <img src="/visa.png" alt=""  width={50}/>
              <img src="/visa.png" alt=""  width={50}/>
              <img src="/visa.png" alt=""  width={50}/>
            </div>
            <div
          className="mt-10 flex"
          style={{ boxSizing: "border-box", marginTop: "1rem" }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=org.catestseries.app&hl=en"
            target="_blank"
            style={{
              boxSizing: "border-box",
              color: "rgb(13, 110, 253)",
              textDecoration: "none",
            }}
          >
            <img
              className="img-fluid"
              alt="Google Play Store"
              src="https://www.catestseries.org/Images/icons/google-play-icon.png"
              style={{
                width: 70,
                boxSizing: "border-box",
                verticalAlign: "middle",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/ca-test-series/id1580872774"
            target="_blank"
            style={{
              boxSizing: "border-box",
              color: "rgb(13, 110, 253)",
              textDecoration: "none",
            }}
          >
            <img
              className="img-fluid ms-3"
              alt="App Store Icon"
              src="https://www.catestseries.org/Images/icons/app-store-icon.png"
              style={{
                width: 70,
                boxSizing: "border-box",
                verticalAlign: "middle",
                maxWidth: "100%",
                height: "auto",
                marginLeft: "1rem",
              }}
            />
          </a>
        </div>
        </div>
    </div>
  )
}

export default Footer_Right