import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import checkmark from "../public/checkmark.png"
import bestfeatures from "../public/bestfeatures.png"
import listings from "../public/listings.png"
import newyork from "../public/newyork.png"
import bigben from "../public/bigben.png"
import rome from "../public/rome.png"
import greek from "../public/greek.png"
import { Fragment } from "react-is"
import typing from "../public/typing.jpg"
import profilepicman from "../public/profilepicman.jpg"
import profilepicwoman from "../public/profilepicwoman.jpg"



export default function Home() {

  return (
    <Fragment>
      <Head>
        <title>Upflip - Property landing page</title>
      </Head>
      
      
      <nav className="navbar lilac navbar-expand-md py-1" style={{width: "inherit", height: "inherit"}}>
        <div className="container" style={{display: "inline"}}>
          <div className="row">
            <div className="col-md-2 col-12">
              <svg className="pe-4" xmlns="http://www.w3.org/2000/svg" width="100" height="75" viewBox="0 0 192.756 192.756"><g fillRule="evenodd" clipRule="evenodd"><path fill="#fff7f8" d="M0 0h192.756v192.756H0V0z"/><path d="M106.412 90.884c.037 1.56.037 2.461-.012 2.653-.16 1.228-.652 2.572-1.461 4.004-1.395 2.634-3.17 4.458-5.324 5.58-1.23.542-3.103 1.045-5.652 1.512-2.308.338-3.94.859-4.887 1.542-.938.688-1.48 2.123-1.627 4.273-.159 3.151-.294 4.925-.387 5.294-.503 1.737-1.676 2.64-3.574 2.671-1.283.042-2.352-.621-3.224-2.068-.67-1.193-1.02-2.235-1.032-3.2l-.712-29.009c-.085-3.183 1.321-5.189 4.213-6.049.933-.253 3.211-.449 6.872-.529 4.813-.117 8.665.78 11.508 2.677 3.426 2.273 5.17 5.804 5.299 10.649zm-8.369.215c-.049-2.026-.438-3.457-1.162-4.193-.694-.743-2.138-1.069-4.31-1.027-2.077.032-3.521.474-4.33 1.314-.818.823-1.222 2.229-1.18 4.22.056 1.873.522 3.243 1.357 4.003.872.816 2.34 1.186 4.415 1.125 2.077-.062 3.464-.449 4.184-1.168.745-.682 1.069-2.107 1.026-4.274zM139.66 96.994c.158 6.516-.426 11.348-1.721 14.479-1.996 4.783-5.957 7.234-11.869 7.344-2.611.124-4.619-.17-6.014-.797-4.119-1.744-6.768-4.814-7.914-9.242-.389-1.561-.658-5.269-.793-11.053-.18-6.934.43-11.848 1.787-14.812 1.953-4.343 5.912-6.571 11.881-6.719 1.967-.024 3.488.055 4.521.289 1.941.54 3.623 1.708 5.053 3.53a75.502 75.502 0 0 0 2.42 2.39c1.209 1.344 1.881 2.352 2.002 3.059.298 2.301.51 6.122.647 11.532zm-8.777.406c-.018-.824-.049-2.028-.078-3.544-.031-1.492-.062-2.556-.074-3.164-.062-1.854-.4-3.224-1.07-4.096-.902-1.001-2.412-1.467-4.562-1.406-2.143.02-3.586.547-4.273 1.53-.688.964-1.014 2.541-.945 4.691.006.485.082 1.424.209 2.793.146 1.419.209 2.537.238 3.416.014.619-.012 1.589-.066 2.959-.066 1.382-.098 2.42-.078 3.101.09 4.238 2.002 6.301 5.703 6.172 2.107-.019 3.549-.688 4.311-1.977.609-1.014.885-2.585.83-4.729-.012-.559-.031-1.535-.051-2.837-.032-1.228-.069-2.26-.094-2.909zM174.84 89.213c.035 1.56.035 2.432 0 2.622-.178 1.248-.656 2.574-1.473 4.022-1.42 2.616-3.182 4.453-5.344 5.546-1.211.576-3.102 1.094-5.65 1.541-2.309.345-3.936.896-4.875 1.578-.945.669-1.475 2.124-1.639 4.27-.154 3.124-.303 4.863-.383 5.237-.498 1.792-1.68 2.634-3.572 2.67-1.271.031-2.348-.624-3.213-2.056-.662-1.144-1.025-2.198-1.037-3.188l-.719-29.011c-.072-3.131 1.334-5.182 4.207-6.022.939-.252 3.229-.425 6.883-.522 4.814-.141 8.658.736 11.502 2.67 3.422 2.262 5.19 5.86 5.313 10.643zm-8.389.209c-.049-2.062-.412-3.451-1.135-4.212-.715-.736-2.158-1.074-4.336-1.057-2.059.073-3.525.541-4.342 1.338-.824.841-1.205 2.23-1.148 4.195.035 1.897.49 3.266 1.361 4.083.861.78 2.316 1.154 4.398 1.074 2.068-.08 3.457-.435 4.199-1.112.722-.74 1.072-2.147 1.003-4.309zM75.223 98.566c.018.878-.67 1.651-1.56 1.651l-10.779.27c-.864.013-1.608-.699-1.62-1.559l-.124-4.82c-.03-.843.67-1.604 1.542-1.623l10.784-.275c.884-.031 1.608.7 1.645 1.584l.112 4.772zM56.438 109.632c.087 3.697-2.18 7.067-6.805 10.089-3.887 2.493-7.46 3.778-10.66 3.863-3.163.098-6.773-1.068-10.845-3.44-4.704-2.786-7.099-6.034-7.191-9.715l-.785-32.422c-.056-1.407.491-2.745 1.608-4.096 1.118-1.309 2.395-2.002 3.826-2.045 1.363-.061 2.67.516 3.887 1.806 1.251 1.233 1.89 2.561 1.927 3.967l.726 29.66c.085 3.477 2.284 5.147 6.564 5.023 4.348-.109 6.479-1.893 6.398-5.441l-.736-29.451c-.032-1.431.508-2.799 1.625-4.125 1.118-1.327 2.396-2.028 3.814-2.045 1.369-.02 2.677.547 3.918 1.793 1.234 1.227 1.891 2.542 1.91 3.991l.819 32.588z" fill="#e9be56"/><path d="M87.866 75.451l-7.006.571c-3.132.94-4.667 3.106-4.611 6.503l.731 29.06 1.099 3.463c.983 1.571 2.235 2.334 3.697 2.31 2.124-.056 3.501-1.101 4.06-3.059.018-.062.411-5.33.411-5.33.123-2.026.614-3.335 1.412-3.919.884-.655 2.451-1.148 4.637-1.442.024-.018 5.797-1.628 5.797-1.628 2.246-1.122 4.119-3.07 5.586-5.704l1.52-4.256v-.185c0-.595.018-2.53.018-2.53-.111-4.975-1.99-8.726-5.527-11.078-2.9-1.977-6.886-2.873-11.824-2.776zm-8.879 39.062c0-.018-.964-2.959-.964-2.959s-.712-29.193-.712-29.291c0-2.77 1.258-4.489 3.826-5.24.043 0 6.753-.515 6.753-.515 4.718-.124 8.493.755 11.213 2.609 3.305 2.181 4.943 5.515 5.068 10.208l.004 2.51c-.004.062-1.41 3.901-1.41 3.901-1.363 2.486-3.09 4.279-5.117 5.299.008 0-5.519 1.554-5.519 1.554-2.34.312-4.048.841-5.097 1.602-1.088.816-1.683 2.347-1.831 4.68 0 .038-.375 5.135-.375 5.135-.435 1.504-1.399 2.252-3.071 2.303-1.097.036-2.001-.567-2.768-1.796zm26.228-25.208z" fill="#cb4842"/><path d="M90.832 83.772c-2.308.092-3.812.558-4.696 1.511-.928.897-1.358 2.439-1.314 4.508.048 2.087.564 3.537 1.521 4.439.952.891 2.519 1.285 4.772 1.241 2.253-.036 3.751-.474 4.562-1.283.822-.824 1.203-2.354 1.153-4.649-.042-2.223-.49-3.783-1.277-4.599-.839-.823-2.382-1.21-4.721-1.168zM87.05 93.47c-.749-.688-1.13-1.905-1.179-3.679-.056-1.792.294-3.07 1.013-3.82.676-.688 2.002-1.094 3.972-1.135 2.5-.08 3.513.447 3.943.822.43.425.94 1.469.972 3.882.066 2.025-.216 3.323-.831 3.911-.612.615-1.915.94-3.843.959-1.953.041-3.304-.284-4.047-.94zM110.938 81.114c-1.395 3.022-2.006 7.976-1.842 15.038.16 5.952.43 9.599.811 11.19 1.186 4.537 3.949 7.769 8.229 9.634 1.492.639 3.525.909 6.227.816 6.086-.141 10.262-2.701 12.344-7.687 1.18-2.85 1.77-7.081 1.77-12.601 0-.683-.008-1.396-.02-2.09l-.656-11.575c0-.068-2.131-3.365-2.131-3.365a944.802 944.802 0 0 1-2.426-2.407c-1.518-1.873-3.297-3.144-5.307-3.629.02 0-4.66-.331-4.66-.331-6.15.11-10.3 2.512-12.339 7.007zm7.609 34.88c-4.029-1.695-6.521-4.643-7.627-8.917-.363-1.497-.639-5.171-.779-10.968-.148-6.804.416-11.68 1.73-14.59 1.898-4.171 5.637-6.222 11.445-6.362l4.367.276c1.783.442 3.379 1.56 4.758 3.334.051.019 2.482 2.438 2.482 2.438-.023 0 1.83 2.77 1.83 2.77 0-.043.645 11.477.645 11.477.172 6.406-.393 11.194-1.656 14.235-1.924 4.55-5.768 6.951-11.404 7.043-2.524.081-4.459-.153-5.791-.736zm19.908-20.579z" fill="#cb4842"/><path d="M123.373 83.06c-2.363.062-3.912.651-4.697 1.776-.756 1.055-1.105 2.695-1.051 4.993l.227 2.891c0 .02.221 3.354.221 3.354l-.078 2.965-.074 3.083c.074 2.401.693 4.176 1.885 5.3 1.033 1.001 2.508 1.449 4.342 1.388 2.326-.03 3.93-.812 4.773-2.247.662-1.13.957-2.758.908-5.029-.012-.559-.309-12.442-.309-12.442-.037-1.963-.422-3.433-1.174-4.396-1.078-1.17-2.731-1.673-4.973-1.636zm-2.861 23.611c-.965-.921-1.492-2.461-1.547-4.567l.072-3.022.088-3.051-.229-3.403-.221-2.818c-.043-2.026.244-3.493.848-4.346.59-.848 1.896-1.309 3.875-1.346 1.934-.061 3.322.357 4.156 1.246.553.719.885 2.026.928 3.746l.16 6.73v-.018l.057 2.947.072 2.229c.055 2.609-.203 4.113-.768 5.023-.65 1.135-1.922 1.701-3.875 1.762-1.56.049-2.776-.325-3.616-1.112zM156.264 73.75l-6.988.607c-3.119.904-4.674 3.083-4.6 6.535l.713 28.96 1.117 3.506c.982 1.572 2.211 2.34 3.697 2.291 2.074-.024 3.463-1.068 4.053-3.01 0-.061.398-5.384.398-5.384.143-1.984.615-3.312 1.432-3.906.879-.62 2.498-1.105 4.66-1.462l5.797-1.577c2.242-1.161 4.104-3.065 5.551-5.76l1.512-4.212v-.104c0-.579.02-2.666.02-2.666v.012c-.131-4.956-1.99-8.672-5.504-11.036-2.942-1.97-6.913-2.873-11.858-2.794zm-8.862 39.05c0-.018-.969-2.947-.969-2.947s-.707-29.149-.707-29.212c0-2.806 1.252-4.538 3.844-5.286l6.723-.559c4.711-.08 8.494.797 11.246 2.634 3.236 2.155 4.918 5.595 5.041 10.213v2.512c0 .08-1.383 3.911-1.383 3.911-1.363 2.492-3.076 4.256-5.121 5.287-.018 0-5.494 1.522-5.494 1.522-2.359.345-4.072.904-5.105 1.623-1.098.792-1.699 2.32-1.865 4.703l-.373 5.146c-.418 1.499-1.432 2.235-3.066 2.26-1.081-.002-1.991-.578-2.771-1.807zm26.203-22.462z" fill="#cb4842"/><path d="M159.268 82.103c-2.193.018-3.777.503-4.705 1.424-.951.947-1.369 2.495-1.324 4.625.061 2.002.562 3.494 1.527 4.415.965.884 2.58 1.291 4.783 1.229 2.234-.024 3.715-.467 4.539-1.29.846-.823 1.215-2.351 1.178-4.642-.072-2.248-.496-3.727-1.289-4.57-.834-.873-2.418-1.265-4.709-1.191zm-3.791 9.683c-.742-.687-1.152-1.916-1.189-3.697-.037-1.773.293-3.069 1.006-3.819.73-.681 2.119-1.129 3.992-1.149 2.475-.079 3.52.449 3.941.872.596.639.922 1.954.996 3.894v.381c0 1.744-.289 2.928-.867 3.5-.607.613-1.928.926-3.818.97-1.923.061-3.317-.252-4.061-.952zM60.963 90.338l-1.492.675-.578 1.553.093 4.791c.043 1.135 1.013 2.088 2.181 2.088l10.782-.295 1.475-.607.603-1.566-.124-4.796-.663-1.487-1.503-.571-10.774.215zm-.933 6.999l-.085-4.788.294-.806.756-.331 10.771-.277.754.313.337.756.104 4.79-.287.792-.731.343-10.796.253a1.118 1.118 0 0 1-1.117-1.045zm13.996-.361v.019l.029-.123-.029.104zM48.061 69.169c-1.589.043-2.99.78-4.206 2.23-1.198 1.399-1.781 2.879-1.744 4.44l.731 29.481c.08 3.224-1.844 4.785-5.902 4.895-4.016.08-5.938-1.362-5.994-4.489l-.761-29.685c-.012-1.511-.735-3.051-2.057-4.316-1.351-1.37-2.801-2.009-4.293-1.965-1.548.019-2.971.736-4.188 2.217-1.21 1.405-1.798 2.947-1.756 4.47l.799 32.38c.092 3.932 2.592 7.325 7.448 10.175 4.115 2.407 7.866 3.605 11.109 3.537 3.316-.085 7.001-1.387 10.937-3.955 4.776-3.118 7.135-6.644 7.031-10.567l-.792-32.583c-.043-1.559-.736-3.053-2.058-4.329-1.355-1.327-2.785-1.973-4.304-1.936zm-11.083 42.103c5.833-.153 6.982-3.336 6.902-5.97l-.719-29.489c-.036-1.283.474-2.548 1.492-3.758 1.027-1.234 2.157-1.81 3.439-1.854 1.203 0 2.396.51 3.53 1.664 1.125 1.062 1.732 2.322 1.764 3.586l.785 32.626c.099 3.525-2.063 6.671-6.564 9.636-3.764 2.431-7.259 3.696-10.378 3.784-3.063.036-6.625-1.069-10.568-3.396-4.582-2.709-6.846-5.755-6.934-9.292l-.792-32.386c-.032-1.285.449-2.512 1.503-3.759 1.021-1.222 2.163-1.86 3.416-1.885 1.222 0 2.396.54 3.537 1.621 1.123 1.149 1.738 2.413 1.762 3.661l.737 29.689c.094 3.734 2.47 5.602 7.088 5.522z" fill="#cb4842"/></g>
              </svg>
            </div>
            
            <div className="col-md-8 col-12 text-nowrap ps-5" style={{display: "inline"}}>

              <br></br>

              <div className="" style={{display: "inline"}}>
                  <Link href="/">
                    <a className="text-muted text-decoration-none ps-2" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px"}}>Home</a>
                  </Link>
                  <Link href="/">
                    <a className="text-muted text-decoration-none ps-4" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px"}}>Buy a Business</a>
                  </Link>
                  <Link href="/">
                    <a className="text-muted text-decoration-none ps-4" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px"}}>Blog</a>
                  </Link>
                  <Link href="/">
                    <a className="text-muted text-decoration-none ps-4" style={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px"}}>About</a>
                  </Link>
                  <Link href="/">
                    <a className="text-muted text-decoration-none ps-4" style={{fontWeight: 500, fontSize: "14px", lineHeight: "20px"}}>Contact</a>
                  </Link>
                </div>
            </div>

            <div className="col-md-2 col-12 ps-5 text-nowrap">
              <br></br>
              <button className="btn btn-sm text-white button5" type="button" style={{display: "inline", backgroundColor: "#ff5c3f"}}>Sell a Business</button>
            </div>
          </div>
        </div>
      </nav>
      

      <body>
        
        <div className="card card-color mx-5 card-border" style={{width:"inherit", height:"inherit"}}>
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 py-5 ps-2 ">
                  
                  <h1 className="card-title" style={{textTransform: "capitalize", fontSize: "70px"}}>a better way to buy and sell a business</h1>
                  
                  <br></br>

                  
                  <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "20px"}}>U-Pop is an online platform that gives you all the best tools to buy or sell a business. </h6>
                  <br></br>

                  <div style={{display: "inline-flex"}}>
                    
                    <div className="input-group">

                      <div className="input-group-text input-border" style={{backgroundColor: "white", borderRightColor: "white"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg></div>
                      <input className="form-control form-control-lg input-border py-3" size="200" type="text" placeholder="Found your dream property" style={{borderLeftColor: "white"}}></input>

                    </div>

                    <div className="ps-5">
                      <button className="btn text-white btn-lg text-nowrap py-3 input-border" style={{backgroundColor: "#ff5c3f", backgroundImage: "linear-gradient(to bottom right, darkorange, red)"}}>
                          Search
                      </button>
                    </div>

                  </div>

                </div>
                
                <div className="col-sm-6">
                  
                </div>

              </div>
            </div>
            
          </div>
        </div>
        
        <div className="container service-margin">
          <div className="row">

            <div className="col-md">
              
            </div>

            <div className="col-md-12 text-center pe-5">
              <h2>Our Services</h2>
              <p style={{textTransform: "capitalize", fontSize: "20px"}}>When the dreams come true, we&apos;re happy every step of the way</p>
              <div className="list-group-horizontal list-group" style={{display: "inline-flex"}}>
                <ul className="list-group">
                  <a href="#" className="list-group-item list card-border text-wrap list-group-item-action">
                  <Image src={bestfeatures} alt="" width="50px" height="50px"></Image>
                  
                    <h5 className="py-3"> The Best Features</h5>
                    <p>We use the latest and best technology in order to make your experience on our website easy and pleasurable. 
                      Street views, floor, plans, see what stores, schools and police stations that are near-by the property.
                    </p>
                  </a>
                </ul>
                <ul className="list-group">
                  <a href="#" className="list-group-item list text-wrap list-group-item-action">
                    <Image src={checkmark} alt="" width="50px" height="50px"></Image>
                    <h5 className="py-3">Ease of Use</h5>
                    <p>Our goal is to make your next commercial real estate investment as easy, fast and pleasurable as possible.
                      That&apos;s why we designed and developed this website with investors like you in mind.
                    </p>
                  </a>
                </ul>
                <ul className="list-group">
                <a href="#" className="list-group-item list text-wrap list-group-item-action">
                <Image src={listings} alt="" width="50px" height="50px"></Image>
                  <h5 className="py-3">Thousands of Listings</h5>
                  <p>From family properties to golf courses, we have everything you need to find your next investment. Want to 
                    post your own listing? We got you covered. and we make sure it&apos;s an easy process.
                  </p>
                </a>
                </ul>
              </div>
              <p></p>
              <br></br>
              <button className="btn btn-outline-warning join-now-button" style={{color: "#ff5c3f"}}>Join Now</button>
            </div>
          </div>
        </div>
          {/* <br></br>
          <br></br>
          <br></br> */}

        <div className="whitepage">
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="container">
            
            <div className="row">

              <div className="col-md">
              </div>

              <div style={{display: "inline-flex"}}>
                
                <div className="col-md-12 text-left" style={{textTransform: "capitalize"}}>
                  <h2><b>every city is beautiful</b></h2>
                  <p style={{fontSize: "20px"}}>select a city to begin exploring it&apos;s beautiful</p>
                </div>

                <button className="btn btn-outline-warning button4" style={{color: "#ff5c3f"}}>Explore</button>

              </div>

            </div>

          </div>

          <div className="container">
            
            <div className="row">
              <div className="col-md-3">

                <div className="card-body">
                  <Image src={newyork} alt="" width="300px" height="600px"></Image>
                </div>

              </div>
              
              <div className="col-md-3">
                <div className="card-body">
                  <Image src={bigben} alt="" width="300px" height="600px"></Image>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card-body">
                  <Image src={rome} alt="" width="300px" height="600px"></Image>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card-body">
                  <Image src={greek} alt="" width="300px" height="600px"></Image>
                </div>
              </div>
            </div>

          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        
        <div className="container service-margin">
          <div className="row">

            <div className="col-md">
              
            </div>

            <div className="col-md-12 text-center pe-5" style={{textTransform: "capitalize"}}>
              <h2><b>the best offer this month</b></h2>
              <p style={{fontSize: "20px"}}>the best offering special for our beloved customer, don&apos;t miss it</p>
              <bt className="btn btn-outline-warning discover-button" style={{color: "#ff5c3f"}}>discover more</bt>
            </div>

          </div>

        </div>

        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <Image src={longpic} width="100%" height="100" alt=""></Image>
            </div>
    
            <div className="col-md-4">
              <Image src={longskinny1} width="400px" height="375px" alt=""></Image>
              <Image src={shortfatpic1} width="600px" height="375px" alt=""></Image>
            </div>
              
            <div className="col-md-4">
              <Image src={shortfatpic2} width="600px" height="375px" alt=""></Image>
              <Image src={longskinny1} width="400px" height="375px" alt=""></Image>
            </div>
          </div>
        </div> */}

        <br />
        <br />

        {/* <div className="container image-gallery">
          <div className="one">
            <Image src={longpic} className="one" alt="" layout="responsive"></Image>
          </div>
          <div className="two">
            <Image src={longskinny1} className="two" alt="" layout="responsive"></Image>
          </div>
          <div className="three">
            <Image src={shortfatpic2} className="three" alt="" layout="responsive"></Image>
          </div>100%
          <div className="four">
            <Image src={shortfatpic2} className="four" alt="" layout="responsive"></Image>
          </div>
          <div className="five">
            <Image src={longskinny1} className="five" alt="" layout="responsive"></Image>
          </div>
        </div> */}

        <div className="container image-gallery">
          
          <a href="public/longpic.jpg" className="one"></a>

          <a href="public/longskinny1.jpg" className="two"></a>

          <a href="public/shortfatpic2.jpg" className="three"></a>

          <a href="public/shortfatpic2.jpg" className="four"></a>

          <a href="public/lonskinny1.jpg" className="five"></a>

          <br />
          <br />
        </div>

          <div className="whitepage">
            <br />
            <br />
            <br />
            <br />

            <div className="container">
              <div className="row">
                <div className="col-md">
            
                </div>
                <div className="col-md-12 text-center pe-5" style={{textTransform: "capitalize"}}>
                  <h2><b>What they said about us</b></h2>
                  <h5 style={{fontSize: "20px"}}>Let our customers say their experience</h5>
                  <br />
                  <br />
                  <br />
                </div>
            
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
            
                      <div className="" style={{width: "100%"}}>
                        <div>
                          <Image src={profilepicwoman} className="round-borders" alt="" width="416" height="416rem"/>
                        </div>
                        <br />
                        <div className="">
                          <p className="card-text py-2" style={{fontSize: "35px", fontFamily: "arial, sans-serif"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                              <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                            </svg> It&apos;s a great experience using this product, very helpful to my business
                          </p>
                          <br />
                          <br />
                          <div style={{display: "inline-flex"}}>
                            <Image src={typing} className="img-fluid round-borders" alt="..." width="60px" height="50px"/>
                            <p className="card-title pt-3 ps-2 text-muted" style={{fontSize: "20px"}}><b>Dhea Anisah</b></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card" style={{backgroundColor: "ghostwhite", borderColor: "ghostwhite"}}>
                        <div className="card-body" style={{display: "inline-flex"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                              <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                          </svg> 
                          <p className="ps-2" style={{fontSize: "25px"}}>
                            Now i can focus to manage my property business with ease, and enjoying the life
                          </p>
                        </div>
                      </div>

                      <div className="pt-2" style={{display: "inline-flex"}}>
                        <Image src={profilepicman} className="img-fluid round-borders" alt="..." width="60px" height="50px"/>
                        <p className="card-title pt-3 ps-2 text-muted" style={{fontSize: "20px"}}><b>Pitra Bogem</b></p>
                      </div>

                      <p></p>

                      <div className="card" style={{backgroundColor: "ghostwhite", borderColor: "ghostwhite"}}>
                        <div className="card-body" style={{display: "inline-flex"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                              <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                          </svg> 
                          <p className="ps-2" style={{fontSize: "25px"}}>
                            It was a great platform to build my business :)
                          </p>
                          
                        </div>
                        <p className="card-text ps-5"><small className="text-muted"><b>Joni Mayo</b></small></p>
                      </div>

                      <p></p>

                      <div className="card" style={{backgroundColor: "ghostwhite", borderColor: "ghostwhite"}}>
                        <div className="card-body" style={{display: "inline-flex"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                              <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                          </svg> 
                          <p className="ps-2" style={{fontSize: "25px"}}>
                            Found a great office for my newest startup business
                          </p>
                          
                        </div>
                        <p className="card-text ps-5"><small className="text-muted"><b>Slamet Andrew</b></small></p>
                      </div>

                      <p></p>

                      <div className="card" style={{backgroundColor: "ghostwhite", borderColor: "ghostwhite"}}>
                        <div className="card-body" style={{display: "inline-flex"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                              <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                          </svg> 
                          <p className="ps-2" style={{fontSize: "25px"}}>
                            so many choice of a good quality apartment
                          </p>
                          
                        </div>
                        <p className="card-text ps-5"><small className="text-muted"><b>Kiki Bagus</b></small></p>
                      </div>

                    </div>

                    <div className="col-md-4">
                      <div className="card" style={{backgroundColor: "ghostwhite", borderColor: "ghostwhite"}}>
                        <div className="card-body" style={{display: "inline-flex"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                              <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                          </svg> 
                          <p className="ps-2" style={{fontSize: "25px"}}>
                            no worries when i going travel crossing the country
                          </p>
                            
                        </div>
                          <p className="card-text ps-5"><small className="text-muted"><b>Agus Travel</b></small></p>
                        </div>

                        <p></p>

                        <div className="card" style={{backgroundColor: "ghostwhite", borderColor: "ghostwhite"}}>
                          <div className="card-body" style={{display: "inline-flex"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                            </svg> 
                            <p className="ps-2" style={{fontSize: "25px"}}>
                              searching property now is very easy, just looking forward to it
                            </p>
                            
                          </div>
                          <p className="card-text ps-5"><small className="text-muted"><b>Zon Nathan</b></small></p>
                        </div>

                        <p></p>

                        <div className="card" style={{backgroundColor: "ghostwhite", borderColor: "ghostwhite"}}>
                          <div className="card-body" style={{display: "inline-flex"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                            </svg> 
                            <p className="ps-2" style={{fontSize: "25px"}}>
                              it was a great platform to build my business :)
                            </p>
                            
                          </div>
                          <p className="card-text ps-5"><small className="text-muted"><b>Kiki Bagus</b></small></p>
                        </div>

                        <p></p>

                        <div className="card" style={{backgroundColor: "ghostwhite", borderColor: "ghostwhite"}}>
                          <div className="card-body" style={{display: "inline-flex"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                            </svg> 
                            <p className="ps-2" style={{fontSize: "25px"}}>
                              now my rent room always full of customers, doesn&apos;t worries anymore
                            </p>
                          </div>
                        </div>

                        <div className="pt-2" style={{display: "inline-flex"}}>
                          <Image src={profilepicman} className="img-fluid round-borders" alt="..." width="60px" height="50px"/>
                          <p className="card-title pt-3 ps-2 text-muted" style={{fontSize: "20px"}}><b>Mustofa Putra</b></p>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="text-center" style={{textTransform: "capitalize"}}>
              <h2><b>what they said about us</b></h2>
              <p style={{fontSize: "20px"}}>let our customers say their experience</p>
              <br />
              <br />
              <br />
            </div>

            <div className=" container reviews-gallery">

              <a href="public/typing.jpg" className="un"></a>
              <h3 className="quatre">its a great experience using this products, very helpful to growing my business and also to increade our capital</h3>

            </div> */}

            <br />
            <br />
            <br />
            <br />
            <br />

          </div>

          
          <div className="text-center mistyrose">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div style={{textTransform: "capitalize"}}>
              <h2 className="pt-5">Let&apos;s growing with us!</h2>
              <p style={{fontSize: "20px"}}>start as earlier so you get more benefit from your business.</p>
              <p className="" style={{fontSize: "20px", marginTop: "-25px"}}>register now for free</p>

              <button className="btn btn-outline-warning register-now-button" style={{color: "white"}}>Register Now</button>
            <br />
            <br />
            <br />
            <br />
            <br />

            </div>
          </div>

      </body>
      
    <footer>
      <br />
      <br />


      <div className="container">
        <div className="row">

          <div className="col text-start">
            <svg className="pe-4" xmlns="http://www.w3.org/2000/svg" width="100" height="75" viewBox="0 0 192.756 192.756"><g fillRule="evenodd" clipRule="evenodd"><path fill="#fff" d="M0 0h192.756v192.756H0V0z"/><path d="M106.412 90.884c.037 1.56.037 2.461-.012 2.653-.16 1.228-.652 2.572-1.461 4.004-1.395 2.634-3.17 4.458-5.324 5.58-1.23.542-3.103 1.045-5.652 1.512-2.308.338-3.94.859-4.887 1.542-.938.688-1.48 2.123-1.627 4.273-.159 3.151-.294 4.925-.387 5.294-.503 1.737-1.676 2.64-3.574 2.671-1.283.042-2.352-.621-3.224-2.068-.67-1.193-1.02-2.235-1.032-3.2l-.712-29.009c-.085-3.183 1.321-5.189 4.213-6.049.933-.253 3.211-.449 6.872-.529 4.813-.117 8.665.78 11.508 2.677 3.426 2.273 5.17 5.804 5.299 10.649zm-8.369.215c-.049-2.026-.438-3.457-1.162-4.193-.694-.743-2.138-1.069-4.31-1.027-2.077.032-3.521.474-4.33 1.314-.818.823-1.222 2.229-1.18 4.22.056 1.873.522 3.243 1.357 4.003.872.816 2.34 1.186 4.415 1.125 2.077-.062 3.464-.449 4.184-1.168.745-.682 1.069-2.107 1.026-4.274zM139.66 96.994c.158 6.516-.426 11.348-1.721 14.479-1.996 4.783-5.957 7.234-11.869 7.344-2.611.124-4.619-.17-6.014-.797-4.119-1.744-6.768-4.814-7.914-9.242-.389-1.561-.658-5.269-.793-11.053-.18-6.934.43-11.848 1.787-14.812 1.953-4.343 5.912-6.571 11.881-6.719 1.967-.024 3.488.055 4.521.289 1.941.54 3.623 1.708 5.053 3.53a75.502 75.502 0 0 0 2.42 2.39c1.209 1.344 1.881 2.352 2.002 3.059.298 2.301.51 6.122.647 11.532zm-8.777.406c-.018-.824-.049-2.028-.078-3.544-.031-1.492-.062-2.556-.074-3.164-.062-1.854-.4-3.224-1.07-4.096-.902-1.001-2.412-1.467-4.562-1.406-2.143.02-3.586.547-4.273 1.53-.688.964-1.014 2.541-.945 4.691.006.485.082 1.424.209 2.793.146 1.419.209 2.537.238 3.416.014.619-.012 1.589-.066 2.959-.066 1.382-.098 2.42-.078 3.101.09 4.238 2.002 6.301 5.703 6.172 2.107-.019 3.549-.688 4.311-1.977.609-1.014.885-2.585.83-4.729-.012-.559-.031-1.535-.051-2.837-.032-1.228-.069-2.26-.094-2.909zM174.84 89.213c.035 1.56.035 2.432 0 2.622-.178 1.248-.656 2.574-1.473 4.022-1.42 2.616-3.182 4.453-5.344 5.546-1.211.576-3.102 1.094-5.65 1.541-2.309.345-3.936.896-4.875 1.578-.945.669-1.475 2.124-1.639 4.27-.154 3.124-.303 4.863-.383 5.237-.498 1.792-1.68 2.634-3.572 2.67-1.271.031-2.348-.624-3.213-2.056-.662-1.144-1.025-2.198-1.037-3.188l-.719-29.011c-.072-3.131 1.334-5.182 4.207-6.022.939-.252 3.229-.425 6.883-.522 4.814-.141 8.658.736 11.502 2.67 3.422 2.262 5.19 5.86 5.313 10.643zm-8.389.209c-.049-2.062-.412-3.451-1.135-4.212-.715-.736-2.158-1.074-4.336-1.057-2.059.073-3.525.541-4.342 1.338-.824.841-1.205 2.23-1.148 4.195.035 1.897.49 3.266 1.361 4.083.861.78 2.316 1.154 4.398 1.074 2.068-.08 3.457-.435 4.199-1.112.722-.74 1.072-2.147 1.003-4.309zM75.223 98.566c.018.878-.67 1.651-1.56 1.651l-10.779.27c-.864.013-1.608-.699-1.62-1.559l-.124-4.82c-.03-.843.67-1.604 1.542-1.623l10.784-.275c.884-.031 1.608.7 1.645 1.584l.112 4.772zM56.438 109.632c.087 3.697-2.18 7.067-6.805 10.089-3.887 2.493-7.46 3.778-10.66 3.863-3.163.098-6.773-1.068-10.845-3.44-4.704-2.786-7.099-6.034-7.191-9.715l-.785-32.422c-.056-1.407.491-2.745 1.608-4.096 1.118-1.309 2.395-2.002 3.826-2.045 1.363-.061 2.67.516 3.887 1.806 1.251 1.233 1.89 2.561 1.927 3.967l.726 29.66c.085 3.477 2.284 5.147 6.564 5.023 4.348-.109 6.479-1.893 6.398-5.441l-.736-29.451c-.032-1.431.508-2.799 1.625-4.125 1.118-1.327 2.396-2.028 3.814-2.045 1.369-.02 2.677.547 3.918 1.793 1.234 1.227 1.891 2.542 1.91 3.991l.819 32.588z" fill="#e9be56"/><path d="M87.866 75.451l-7.006.571c-3.132.94-4.667 3.106-4.611 6.503l.731 29.06 1.099 3.463c.983 1.571 2.235 2.334 3.697 2.31 2.124-.056 3.501-1.101 4.06-3.059.018-.062.411-5.33.411-5.33.123-2.026.614-3.335 1.412-3.919.884-.655 2.451-1.148 4.637-1.442.024-.018 5.797-1.628 5.797-1.628 2.246-1.122 4.119-3.07 5.586-5.704l1.52-4.256v-.185c0-.595.018-2.53.018-2.53-.111-4.975-1.99-8.726-5.527-11.078-2.9-1.977-6.886-2.873-11.824-2.776zm-8.879 39.062c0-.018-.964-2.959-.964-2.959s-.712-29.193-.712-29.291c0-2.77 1.258-4.489 3.826-5.24.043 0 6.753-.515 6.753-.515 4.718-.124 8.493.755 11.213 2.609 3.305 2.181 4.943 5.515 5.068 10.208l.004 2.51c-.004.062-1.41 3.901-1.41 3.901-1.363 2.486-3.09 4.279-5.117 5.299.008 0-5.519 1.554-5.519 1.554-2.34.312-4.048.841-5.097 1.602-1.088.816-1.683 2.347-1.831 4.68 0 .038-.375 5.135-.375 5.135-.435 1.504-1.399 2.252-3.071 2.303-1.097.036-2.001-.567-2.768-1.796zm26.228-25.208z" fill="#cb4842"/><path d="M90.832 83.772c-2.308.092-3.812.558-4.696 1.511-.928.897-1.358 2.439-1.314 4.508.048 2.087.564 3.537 1.521 4.439.952.891 2.519 1.285 4.772 1.241 2.253-.036 3.751-.474 4.562-1.283.822-.824 1.203-2.354 1.153-4.649-.042-2.223-.49-3.783-1.277-4.599-.839-.823-2.382-1.21-4.721-1.168zM87.05 93.47c-.749-.688-1.13-1.905-1.179-3.679-.056-1.792.294-3.07 1.013-3.82.676-.688 2.002-1.094 3.972-1.135 2.5-.08 3.513.447 3.943.822.43.425.94 1.469.972 3.882.066 2.025-.216 3.323-.831 3.911-.612.615-1.915.94-3.843.959-1.953.041-3.304-.284-4.047-.94zM110.938 81.114c-1.395 3.022-2.006 7.976-1.842 15.038.16 5.952.43 9.599.811 11.19 1.186 4.537 3.949 7.769 8.229 9.634 1.492.639 3.525.909 6.227.816 6.086-.141 10.262-2.701 12.344-7.687 1.18-2.85 1.77-7.081 1.77-12.601 0-.683-.008-1.396-.02-2.09l-.656-11.575c0-.068-2.131-3.365-2.131-3.365a944.802 944.802 0 0 1-2.426-2.407c-1.518-1.873-3.297-3.144-5.307-3.629.02 0-4.66-.331-4.66-.331-6.15.11-10.3 2.512-12.339 7.007zm7.609 34.88c-4.029-1.695-6.521-4.643-7.627-8.917-.363-1.497-.639-5.171-.779-10.968-.148-6.804.416-11.68 1.73-14.59 1.898-4.171 5.637-6.222 11.445-6.362l4.367.276c1.783.442 3.379 1.56 4.758 3.334.051.019 2.482 2.438 2.482 2.438-.023 0 1.83 2.77 1.83 2.77 0-.043.645 11.477.645 11.477.172 6.406-.393 11.194-1.656 14.235-1.924 4.55-5.768 6.951-11.404 7.043-2.524.081-4.459-.153-5.791-.736zm19.908-20.579z" fill="#cb4842"/><path d="M123.373 83.06c-2.363.062-3.912.651-4.697 1.776-.756 1.055-1.105 2.695-1.051 4.993l.227 2.891c0 .02.221 3.354.221 3.354l-.078 2.965-.074 3.083c.074 2.401.693 4.176 1.885 5.3 1.033 1.001 2.508 1.449 4.342 1.388 2.326-.03 3.93-.812 4.773-2.247.662-1.13.957-2.758.908-5.029-.012-.559-.309-12.442-.309-12.442-.037-1.963-.422-3.433-1.174-4.396-1.078-1.17-2.731-1.673-4.973-1.636zm-2.861 23.611c-.965-.921-1.492-2.461-1.547-4.567l.072-3.022.088-3.051-.229-3.403-.221-2.818c-.043-2.026.244-3.493.848-4.346.59-.848 1.896-1.309 3.875-1.346 1.934-.061 3.322.357 4.156 1.246.553.719.885 2.026.928 3.746l.16 6.73v-.018l.057 2.947.072 2.229c.055 2.609-.203 4.113-.768 5.023-.65 1.135-1.922 1.701-3.875 1.762-1.56.049-2.776-.325-3.616-1.112zM156.264 73.75l-6.988.607c-3.119.904-4.674 3.083-4.6 6.535l.713 28.96 1.117 3.506c.982 1.572 2.211 2.34 3.697 2.291 2.074-.024 3.463-1.068 4.053-3.01 0-.061.398-5.384.398-5.384.143-1.984.615-3.312 1.432-3.906.879-.62 2.498-1.105 4.66-1.462l5.797-1.577c2.242-1.161 4.104-3.065 5.551-5.76l1.512-4.212v-.104c0-.579.02-2.666.02-2.666v.012c-.131-4.956-1.99-8.672-5.504-11.036-2.942-1.97-6.913-2.873-11.858-2.794zm-8.862 39.05c0-.018-.969-2.947-.969-2.947s-.707-29.149-.707-29.212c0-2.806 1.252-4.538 3.844-5.286l6.723-.559c4.711-.08 8.494.797 11.246 2.634 3.236 2.155 4.918 5.595 5.041 10.213v2.512c0 .08-1.383 3.911-1.383 3.911-1.363 2.492-3.076 4.256-5.121 5.287-.018 0-5.494 1.522-5.494 1.522-2.359.345-4.072.904-5.105 1.623-1.098.792-1.699 2.32-1.865 4.703l-.373 5.146c-.418 1.499-1.432 2.235-3.066 2.26-1.081-.002-1.991-.578-2.771-1.807zm26.203-22.462z" fill="#cb4842"/><path d="M159.268 82.103c-2.193.018-3.777.503-4.705 1.424-.951.947-1.369 2.495-1.324 4.625.061 2.002.562 3.494 1.527 4.415.965.884 2.58 1.291 4.783 1.229 2.234-.024 3.715-.467 4.539-1.29.846-.823 1.215-2.351 1.178-4.642-.072-2.248-.496-3.727-1.289-4.57-.834-.873-2.418-1.265-4.709-1.191zm-3.791 9.683c-.742-.687-1.152-1.916-1.189-3.697-.037-1.773.293-3.069 1.006-3.819.73-.681 2.119-1.129 3.992-1.149 2.475-.079 3.52.449 3.941.872.596.639.922 1.954.996 3.894v.381c0 1.744-.289 2.928-.867 3.5-.607.613-1.928.926-3.818.97-1.923.061-3.317-.252-4.061-.952zM60.963 90.338l-1.492.675-.578 1.553.093 4.791c.043 1.135 1.013 2.088 2.181 2.088l10.782-.295 1.475-.607.603-1.566-.124-4.796-.663-1.487-1.503-.571-10.774.215zm-.933 6.999l-.085-4.788.294-.806.756-.331 10.771-.277.754.313.337.756.104 4.79-.287.792-.731.343-10.796.253a1.118 1.118 0 0 1-1.117-1.045zm13.996-.361v.019l.029-.123-.029.104zM48.061 69.169c-1.589.043-2.99.78-4.206 2.23-1.198 1.399-1.781 2.879-1.744 4.44l.731 29.481c.08 3.224-1.844 4.785-5.902 4.895-4.016.08-5.938-1.362-5.994-4.489l-.761-29.685c-.012-1.511-.735-3.051-2.057-4.316-1.351-1.37-2.801-2.009-4.293-1.965-1.548.019-2.971.736-4.188 2.217-1.21 1.405-1.798 2.947-1.756 4.47l.799 32.38c.092 3.932 2.592 7.325 7.448 10.175 4.115 2.407 7.866 3.605 11.109 3.537 3.316-.085 7.001-1.387 10.937-3.955 4.776-3.118 7.135-6.644 7.031-10.567l-.792-32.583c-.043-1.559-.736-3.053-2.058-4.329-1.355-1.327-2.785-1.973-4.304-1.936zm-11.083 42.103c5.833-.153 6.982-3.336 6.902-5.97l-.719-29.489c-.036-1.283.474-2.548 1.492-3.758 1.027-1.234 2.157-1.81 3.439-1.854 1.203 0 2.396.51 3.53 1.664 1.125 1.062 1.732 2.322 1.764 3.586l.785 32.626c.099 3.525-2.063 6.671-6.564 9.636-3.764 2.431-7.259 3.696-10.378 3.784-3.063.036-6.625-1.069-10.568-3.396-4.582-2.709-6.846-5.755-6.934-9.292l-.792-32.386c-.032-1.285.449-2.512 1.503-3.759 1.021-1.222 2.163-1.86 3.416-1.885 1.222 0 2.396.54 3.537 1.621 1.123 1.149 1.738 2.413 1.762 3.661l.737 29.689c.094 3.734 2.47 5.602 7.088 5.522z" fill="#cb4842"/></g>
            </svg>
            <br />
            <br />

            <div className="ps-2">
              <h6><b>Main Menu</b></h6>
              <div style={{fontSize: "15px"}}>
                <p>Home</p>
                <p>Buy a Business</p>
                <p>Contact</p>
                <p>About</p>
              </div>
            </div>

          </div>

          <div className="col">
            <br />
            <br />
            <br />
            <br />
            <div style={{marginTop: "4.5px"}}>
              <h6><b>Search</b></h6>
              <div style={{fontSize: "15px"}}>
                  <p>Search For Business</p>
                  <p>Agent</p>
                  <p>Agencies</p>
                </div>
            </div>
          </div>

          <div className="col">
            <br />
            <br />
            <br />
            <br />
            <div style={{marginTop: "4.5px"}}>
              <h6><b>Search</b></h6>
              <div style={{fontSize: "15px"}}>
                  <p>Get Business Financing</p>
                  <p>Privacy Policy</p>
                  <p>terms</p>
                </div>
            </div>
          </div>

          <div className="col">
            <br />
            <br />
            <br />
            <br />
            <div style={{marginTop: "4.5px"}}>
              <h6><b>Search</b></h6>
              <div style={{fontSize: "15px"}}>
                  <p>Contact</p>
                  <p>Call: 02422424242</p>
                  <p>Email: murisemail.gmail.com</p>
                </div>
            </div>
          </div>

        </div>
        <br />

      </div>

      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <span className="text-muted ps-2" style={{fontSize: "15px"}}>We are also available in</span>
            <br />
            <div style={{display:"inline-flex"}}>
              <svg className="ps-2 pt-2" style={{marginTop: "3px"}} xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 1619.125 479.868"><path d="M1608.385 423.216c0 25.393-20.568 45.96-46.008 45.96H56.748c-25.428 0-46.067-20.567-46.067-45.96V56.7c0-25.38 20.64-46.02 46.067-46.02h1505.616c25.452 0 46.009 20.64 46.009 46.02l.012 366.516z" fill="#fff"/><path d="M1562.377 479.868H56.748C25.464 479.868 0 454.464 0 423.216V56.712C0 25.44 25.464 0 56.748 0h1505.616c31.248 0 56.748 25.44 56.748 56.712v366.504c.024 31.248-25.476 56.652-56.735 56.652z" fill="#a6a6a6"/><path d="M1608.385 423.216c0 25.393-20.568 45.96-46.008 45.96H56.748c-25.428 0-46.067-20.567-46.067-45.96V56.7c0-25.38 20.64-46.02 46.067-46.02h1505.616c25.452 0 46.009 20.64 46.009 46.02l.012 366.516z"/><path d="M361.536 237.408c-.348-38.676 31.668-57.492 33.132-58.368-18.132-26.436-46.235-30.048-56.111-30.336-23.604-2.484-46.5 14.124-58.524 14.124-12.264 0-30.78-13.884-50.736-13.476-25.68.396-49.703 15.264-62.88 38.352-27.191 47.076-6.912 116.256 19.141 154.308 13.031 18.648 28.26 39.444 48.191 38.712 19.5-.792 26.784-12.42 50.316-12.42 23.315 0 30.156 12.42 50.483 11.952 20.929-.324 34.104-18.72 46.681-37.524 15.06-21.348 21.107-42.396 21.348-43.476-.481-.168-40.633-15.504-41.041-61.848zM323.136 123.672c10.487-13.116 17.664-30.96 15.672-49.068-15.181.672-34.164 10.5-45.097 23.328-9.672 11.304-18.312 29.832-16.08 47.256 17.053 1.272 34.561-8.604 45.505-21.516z" fill="#fff"/><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-589.992" y1="1661.375" x2="-589.992" y2="1625.329" gradientTransform="matrix(12 0 0 12 8267.433 -19455.328)"><stop offset="0" stopColor="#1a1a1a" stopOpacity=".1"/><stop offset=".123" stopColor="#212121" stopOpacity=".151"/><stop offset=".308" stopColor="#353535" stopOpacity=".227"/><stop offset=".532" stopColor="#575757" stopOpacity=".318"/><stop offset=".783" stopColor="#858585" stopOpacity=".421"/><stop offset="1" stopColor="#b3b3b3" stopOpacity=".51"/></linearGradient><path d="M1562.377 0H755.916l315.877 479.868h490.584c31.248 0 56.748-25.404 56.748-56.688V56.712C1619.136 25.44 1593.636 0 1562.377 0z" fill="url(#a)"/><g fill="#fff"><path d="M643.98 378.048h-27.252L601.8 331.14h-51.889l-14.22 46.908H509.16l51.42-159.696h31.752l51.648 159.696zm-46.679-66.588l-13.5-41.7c-1.428-4.26-4.116-14.292-8.053-30.084h-.479c-1.584 6.792-4.116 16.824-7.584 30.084l-13.272 41.7h42.888zM775.957 319.056c0 19.584-5.316 35.064-15.961 46.429-9.527 10.115-21.371 15.168-35.496 15.168-15.252 0-26.22-5.437-32.88-16.332v60.42h-25.584V300.744c0-12.301-.323-24.912-.947-37.848h22.5l1.428 18.252h.479c8.532-13.752 21.48-20.629 38.856-20.629 13.584 0 24.924 5.364 33.996 16.104 9.06 10.765 13.609 24.901 13.609 42.433zm-26.065.936c0-11.208-2.52-20.448-7.584-27.732-5.532-7.572-12.96-11.363-22.272-11.363-6.312 0-12.048 2.111-17.172 6.275-5.136 4.2-8.496 9.684-10.067 16.476-.792 3.168-1.188 5.748-1.188 7.789v19.211c0 8.364 2.568 15.433 7.704 21.217 5.136 5.76 11.808 8.651 20.016 8.651 9.637 0 17.137-3.731 22.5-11.136 5.375-7.428 8.063-17.22 8.063-29.388zM908.4 319.056c0 19.584-5.316 35.064-15.96 46.429-9.54 10.115-21.372 15.168-35.508 15.168-15.252 0-26.22-5.437-32.88-16.332v60.42h-25.584V300.744c0-12.301-.324-24.912-.948-37.848h22.5l1.428 18.252h.48c8.52-13.752 21.468-20.629 38.855-20.629 13.572 0 24.912 5.364 34.009 16.104 9.049 10.765 13.608 24.901 13.608 42.433zm-26.076.936c0-11.208-2.531-20.448-7.596-27.732-5.532-7.572-12.936-11.363-22.248-11.363-6.312 0-12.048 2.111-17.196 6.275-5.136 4.2-8.483 9.684-10.056 16.476-.78 3.168-1.2 5.748-1.2 7.789v19.211c0 8.364 2.58 15.433 7.692 21.217 5.136 5.748 11.808 8.651 20.04 8.651 9.647 0 17.147-3.731 22.5-11.136 5.376-7.428 8.064-17.22 8.064-29.388zM1056.48 333.252c0 13.596-4.752 24.648-14.195 33.18-10.393 9.312-24.9 13.98-43.501 13.98-17.184 0-30.96-3.312-41.352-9.948l5.916-21.324c11.22 6.648 23.544 9.96 36.96 9.96 9.648 0 17.148-2.184 22.5-6.516 5.363-4.344 8.076-10.152 8.076-17.4 0-6.491-2.244-11.928-6.648-16.355-4.428-4.416-11.748-8.532-22.031-12.312-27.961-10.428-41.953-25.68-41.953-45.744 0-13.104 4.944-23.832 14.809-32.22 9.864-8.376 22.944-12.563 39.216-12.563 14.532 0 26.64 2.532 36.252 7.584l-6.42 20.855c-9.048-4.896-19.261-7.344-30.685-7.344-9.023 0-16.104 2.22-21.168 6.636-4.26 3.948-6.42 8.761-6.42 14.472 0 6.301 2.461 11.533 7.356 15.637 4.248 3.779 12 7.896 23.208 12.312 13.752 5.544 23.855 12 30.324 19.416 6.516 7.414 9.756 16.666 9.756 27.694zM1141.285 282.096h-28.201v55.908c0 14.22 4.969 21.312 14.929 21.312 4.571 0 8.364-.385 11.364-1.188l.707 19.428c-5.039 1.885-11.676 2.832-19.896 2.832-10.104 0-18-3.084-23.7-9.252-5.676-6.168-8.531-16.5-8.531-31.044v-58.044h-16.801v-19.2h16.801v-21.084l25.127-7.584v28.668h28.201v19.248zM1268.268 319.524c0 17.699-5.063 32.231-15.168 43.596-10.572 11.7-24.636 17.532-42.168 17.532-16.92 0-30.372-5.604-40.404-16.8-10.032-11.221-15.048-25.356-15.048-42.408 0-17.845 5.184-32.46 15.516-43.824 10.356-11.376 24.301-17.063 41.832-17.063 16.896 0 30.469 5.615 40.74 16.823 9.817 10.872 14.7 24.912 14.7 42.144zm-26.52.588c0-10.549-2.279-19.597-6.852-27.169-5.364-9.144-13.044-13.715-22.992-13.715-10.248 0-18.107 4.571-23.46 13.715-4.584 7.572-6.864 16.776-6.864 27.648 0 10.561 2.28 19.632 6.864 27.181 5.532 9.144 13.248 13.716 23.244 13.716 9.78 0 17.448-4.668 22.992-13.944 4.705-7.752 7.068-16.86 7.068-27.432zM1351.465 285.396c-2.532-.469-5.244-.709-8.064-.709-9 0-15.96 3.385-20.855 10.2-4.248 6-6.385 13.584-6.385 22.74v60.42h-25.584V299.16c0-13.26-.252-25.356-.744-36.252h22.285l.936 22.031h.708c2.712-7.571 6.96-13.68 12.792-18.252 5.7-4.115 11.855-6.168 18.492-6.168 2.363 0 4.5.168 6.396.469l.023 24.408zM1465.885 315.024c0 4.584-.301 8.447-.937 11.604h-76.752c.288 11.376 4.009 20.088 11.136 26.088 6.469 5.353 14.832 8.04 25.104 8.04 11.364 0 21.731-1.8 31.056-5.436l4.008 17.748c-10.896 4.752-23.76 7.116-38.604 7.116-17.855 0-31.872-5.257-42.072-15.744-10.176-10.5-15.275-24.612-15.275-42.288 0-17.353 4.74-31.812 14.231-43.344 9.937-12.312 23.364-18.469 40.261-18.469 16.596 0 29.159 6.156 37.691 18.469 6.756 9.756 10.153 21.852 10.153 36.216zm-24.397-6.636c.18-7.596-1.5-14.136-4.968-19.668-4.429-7.128-11.244-10.68-20.376-10.68-8.364 0-15.18 3.468-20.364 10.428-4.26 5.532-6.792 12.18-7.571 19.896l53.279.024z"/></g><g fill="#fff"><path d="M584.965 161.196H571.56l-7.332-23.052h-25.5l-6.996 23.052h-13.044l25.272-78.492h15.6l25.405 78.492zm-22.945-32.724l-6.636-20.496c-.696-2.1-1.98-6.984-3.96-14.784h-.24c-.816 3.372-1.98 8.268-3.732 14.784l-6.516 20.496h21.084zM648.156 104.604l-21.432 56.592h-12.229l-20.735-56.592h13.512l9.672 29.928c1.632 5.004 3.024 9.78 4.068 14.316h.348c.937-4.068 2.328-8.844 4.068-14.316l9.552-29.928h13.176zM693.78 161.196l-.936-6.517h-.349c-3.84 5.244-9.432 7.8-16.535 7.8-10.129 0-17.353-7.104-17.353-16.656 0-13.968 12.108-21.192 33.072-21.192v-1.044c0-7.452-3.96-11.184-11.76-11.184-5.593 0-10.488 1.404-14.784 4.2l-2.557-8.268c5.244-3.264 11.761-4.896 19.452-4.896 14.784 0 22.248 7.8 22.248 23.412v20.844c0 5.712.24 10.14.816 13.512l-11.314-.011zm-1.752-28.188c-13.979 0-20.964 3.384-20.964 11.412 0 5.94 3.612 8.844 8.616 8.844 6.407 0 12.348-4.884 12.348-11.52v-8.736zM732.288 95.28c-4.188 0-7.452-3.264-7.452-7.572s3.373-7.452 7.692-7.452c4.308 0 7.8 3.144 7.681 7.452 0 4.548-3.252 7.572-7.921 7.572zm6.528 65.916H726.24v-56.592h12.576v56.592zM773.736 161.196H761.16v-82.56h12.576v82.56zM827.184 161.196l-.937-6.517h-.347c-3.84 5.244-9.432 7.8-16.536 7.8-10.128 0-17.352-7.104-17.352-16.656 0-13.968 12.107-21.192 33.071-21.192v-1.044c0-7.452-3.96-11.184-11.76-11.184-5.592 0-10.488 1.404-14.784 4.2l-2.567-8.28c5.244-3.264 11.76-4.896 19.452-4.896 14.784 0 22.247 7.8 22.247 23.412v20.844c0 5.712.253 10.14.805 13.512h-11.292zm-1.752-28.188c-13.98 0-20.964 3.384-20.964 11.412 0 5.94 3.611 8.844 8.615 8.844 6.408 0 12.349-4.884 12.349-11.52v-8.736zM888.625 162.48c-8.028 0-13.957-3.384-17.797-10.02h-.252l-.72 8.736H859.14c.348-4.536.468-9.672.468-15.252V78.636h12.588v34.248h.24c3.731-6.288 9.769-9.432 18.048-9.432 13.632 0 23.184 11.652 23.184 28.644 0 17.568-10.608 30.384-25.043 30.384zm-2.557-49.152c-7.236 0-13.859 6.288-13.859 15.024v9.9c0 7.8 5.951 14.208 13.644 14.208 9.42 0 15.024-7.68 15.024-19.908-.013-11.412-5.845-19.224-14.809-19.224zM944.832 161.196h-12.563v-82.56h12.563v82.56zM1013.293 135.924h-37.752c.252 10.716 7.331 16.764 17.819 16.764 5.592 0 10.716-.936 15.252-2.676l1.956 8.736c-5.352 2.328-11.64 3.492-18.972 3.492-17.712 0-28.188-11.184-28.188-28.524 0-17.352 10.729-30.396 26.772-30.396 14.437 0 23.532 10.716 23.532 26.904.048 2.208-.06 4.188-.419 5.7zm-11.533-8.964c0-8.736-4.429-14.904-12.468-14.904-7.225 0-12.912 6.288-13.752 14.904h26.22zM1089.516 162.48c-16.536 0-27.252-12.348-27.252-29.112 0-17.472 10.944-29.928 28.2-29.928 16.283 0 27.252 11.76 27.252 29.004.001 17.688-11.304 30.036-28.2 30.036zm.48-49.848c-9.084 0-14.903 8.496-14.903 20.376 0 11.652 5.94 20.148 14.784 20.148s14.771-9.084 14.771-20.388c.012-11.52-5.808-20.136-14.652-20.136zM1185.324 161.196h-12.563V128.7c0-10.008-3.841-15.024-11.412-15.024-7.452 0-12.588 6.408-12.588 13.86v33.66h-12.564V120.78c0-5.004-.132-10.368-.468-16.188h11.064l.588 8.736h.348c3.359-6.048 10.248-9.9 17.928-9.9 11.868 0 19.668 9.084 19.668 23.868v33.9h-.001zM1267.608 114.036h-13.836v27.48c0 6.996 2.437 10.488 7.32 10.488 2.22 0 4.092-.24 5.592-.588l.349 9.552c-2.449.937-5.725 1.404-9.769 1.404-9.912 0-15.828-5.472-15.828-19.8v-28.536h-8.256v-9.432h8.256V94.236l12.336-3.732v14.088h13.836v9.444zM1334.209 161.196h-12.589V128.94c0-10.128-3.84-15.252-11.411-15.252-6.517 0-12.564 4.428-12.564 13.392v34.116h-12.588v-82.56h12.588v33.996h.24c3.96-6.168 9.672-9.204 17.004-9.204 11.988 0 19.32 9.312 19.32 24.108v33.66zM1398.469 135.924h-37.74c.24 10.716 7.32 16.764 17.809 16.764 5.604 0 10.715-.936 15.252-2.676l1.968 8.736c-5.353 2.328-11.652 3.492-18.984 3.492-17.712 0-28.188-11.184-28.188-28.524 0-17.352 10.729-30.396 26.772-30.396 14.437 0 23.532 10.716 23.532 26.904.046 2.208-.074 4.188-.421 5.7zm-11.533-8.964c0-8.736-4.416-14.904-12.456-14.904-7.236 0-12.924 6.288-13.752 14.904h26.208z"/></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="65" width="200" viewBox="-449.84925 -222.507 3898.6935 1335.042"><defs><linearGradient id="a" y2=".278" x2=".26" y1=".956" x1=".613"><stop offset="0%" stopColor="#00A0FF"/><stop offset=".657%" stopColor="#00A1FF"/><stop offset="26.01%" stopColor="#00BEFF"/><stop offset="51.22%" stopColor="#00D2FF"/><stop offset="76.04%" stopColor="#00DFFF"/><stop offset="100%" stopColor="#00E3FF"/></linearGradient><linearGradient id="b" y2=".509" x2="-1.305" y1=".509" x1="1.076"><stop offset="0%" stopColor="#FFE000"/><stop offset="40.87%" stopColor="#FFBD00"/><stop offset="77.54%" stopColor="orange"/><stop offset="100%" stopColor="#FF9C00"/></linearGradient><linearGradient id="c" y2="-.361" x2="-.505" y1=".691" x1=".867"><stop offset="0%" stopColor="#FF3A44"/><stop offset="100%" stopColor="#C31162"/></linearGradient><linearGradient id="d" y2=".649" x2=".418" y1="1.119" x1="-.193"><stop offset="0%" stopColor="#32A071"/><stop offset="6.85%" stopColor="#2DA771"/><stop offset="47.62%" stopColor="#15CF74"/><stop offset="80.09%" stopColor="#06E775"/><stop offset="100%" stopColor="#00F076"/></linearGradient><linearGradient id="e" y2="-.021" x2="-.501" y1=".695" x1=".862"><stop offset="0%" stopColor="#CC2E36"/><stop offset="100%" stopColor="#9C0E4E"/></linearGradient><linearGradient id="f" y2="4.496" x2="-.663" y1="15.318" x1="3.073"><stop offset="0%" stopColor="#008DE0"/><stop offset=".657%" stopColor="#008DE0"/><stop offset="26.01%" stopColor="#00A7E0"/><stop offset="51.22%" stopColor="#00B8E0"/><stop offset="76.04%" stopColor="#00C4E0"/><stop offset="100%" stopColor="#00C7E0"/></linearGradient><linearGradient id="g" y2="1" x2="-2.882" y1="1" x1="1.128"><stop offset="0%" stopColor="#E0C500"/><stop offset="40.87%" stopColor="#E0A600"/><stop offset="77.54%" stopColor="#E09100"/><stop offset="100%" stopColor="#E08900"/></linearGradient><linearGradient id="h" y2="0" x2="-2.882" y1="0" x1="1.128"><stop offset="0%" stopColor="#FFE840"/><stop offset="40.87%" stopColor="#FFCE40"/><stop offset="77.54%" stopColor="#FFBC40"/><stop offset="100%" stopColor="#FFB540"/></linearGradient><linearGradient id="i" y2="-10.098" x2="-.657" y1=".234" x1="3.061"><stop offset="0%" stopColor="#40B8FF"/><stop offset=".657%" stopColor="#40B9FF"/><stop offset="26.01%" stopColor="#40CEFF"/><stop offset="51.22%" stopColor="#40DDFF"/><stop offset="76.04%" stopColor="#40E7FF"/><stop offset="100%" stopColor="#40EAFF"/></linearGradient><linearGradient id="j" y2=".537" x2=".421" y1=".856" x1="-.188"><stop offset="0%" stopColor="#65B895"/><stop offset="6.85%" stopColor="#62BD95"/><stop offset="47.62%" stopColor="#50DB97"/><stop offset="80.09%" stopColor="#44ED98"/><stop offset="100%" stopColor="#40F498"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(.72167 1.38567)" y2="110.924" x2="103.763" y1="380.413" x1="243.89" id="k" xlinkHref="#a"/><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(1.1083 .90228)" y2="104.456" x2="-265.185" y1="104.456" x1="219.82" id="l" xlinkHref="#b"/><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(1.13894 .878)" y2="-116.045" x2="-162.26" y1="222.803" x1="279.815" id="m" xlinkHref="#c"/><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(1.13896 .878)" y2="210.03" x2="134.984" y1="361.335" x1="-62.115" id="n" xlinkHref="#d"/><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(1.38147 .72387)" y2="-4.388" x2="-133.972" y1="187.683" x1="231.994" id="o" xlinkHref="#e"/><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(.58803 1.7006)" y2="91.69" x2="-13.255" y1="311.274" x1="62.549" id="p" xlinkHref="#f"/><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(1.19442 .83723)" y2="112.451" x2="-322.924" y1="112.451" x1="127.112" id="q" xlinkHref="#g"/><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(1.1944 .83724)" y2=".829" x2="-322.928" y1=".829" x1="127.114" id="r" xlinkHref="#h"/><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(.58722 1.70294)" y2="-204.589" x2="-13.13" y1="4.878" x1="62.249" id="s" xlinkHref="#i"/><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(1.38144 .72388)" y2="144.927" x2="113.528" y1="230.7" x1="-49.894" id="t" xlinkHref="#j"/></defs><g fill="none"><path fill="#000" d="M2887.921 890.028H111.074C49.984 890.028 0 839.964 0 778.775V111.254C0 50.064 49.983 0 111.074 0H2887.92c61.09 0 111.074 50.064 111.074 111.254v667.52c0 61.19-49.983 111.254-111.074 111.254"/><path fill="#A6A6A6" d="M2887.921 0H111.074C49.984 0 0 50.064 0 111.254v667.52c0 61.19 49.983 111.254 111.074 111.254H2887.92c61.09 0 111.074-50.064 111.074-111.253V111.254C2998.995 50.064 2949.012 0 2887.92 0m0 17.8c51.45 0 93.302 41.93 93.302 93.454v667.52c0 51.534-41.853 93.463-93.302 93.463H111.074c-51.44 0-93.302-41.93-93.302-93.462V111.254c0-51.524 41.861-93.453 93.302-93.453H2887.92"/><path fill="#FFF" d="M1053.39 227.923c0 18.642-5.512 33.487-16.55 44.561-12.539 13.168-28.88 19.757-48.969 19.757-19.238 0-35.595-6.675-49.046-20.044-13.475-13.359-20.2-29.925-20.2-49.69 0-19.774 6.725-36.33 20.2-49.7 13.451-13.358 29.808-20.043 49.046-20.043 9.546 0 18.685 1.87 27.362 5.599 8.677 3.738 15.637 8.7 20.844 14.914l-11.716 11.742c-8.824-10.56-20.973-15.836-36.49-15.836-14.03 0-26.162 4.938-36.401 14.82-10.241 9.892-15.36 22.72-15.36 38.504 0 15.785 5.119 28.612 15.36 38.505 10.239 9.882 22.37 14.819 36.401 14.819 14.884 0 27.293-4.964 37.228-14.906 6.449-6.477 10.178-15.48 11.176-27.041H987.87v-16.036h64.59c.624 3.487.928 6.833.928 10.075"/><path fill="#FFF" d="M1053.39 227.923h-2.222c-.018 18.217-5.33 32.366-15.9 42.988l-.023.018-.01.018c-12.14 12.714-27.745 19.042-47.365 19.069-18.724-.027-34.397-6.424-47.484-19.392-13.058-12.994-19.515-28.857-19.54-48.117.025-19.269 6.482-35.123 19.54-48.108 13.087-12.977 28.76-19.383 47.484-19.41 9.26 0 18.077 1.81 26.485 5.416 8.417 3.634 15.066 8.396 20.02 14.308l1.701-1.436-1.57-1.573-11.716 11.75 1.57 1.565 1.711-1.424c-9.235-11.083-22.197-16.67-38.2-16.637-14.551-.018-27.351 5.19-37.939 15.447-10.69 10.29-16.061 23.84-16.043 40.102-.018 16.263 5.353 29.812 16.043 40.103 10.588 10.257 23.388 15.464 37.938 15.446 15.377.027 28.482-5.198 38.799-15.558 6.89-6.92 10.796-16.505 11.82-28.423l.207-2.416h-48.604v-11.586h62.368v-2.225l-2.188.391c.608 3.374.895 6.58.895 9.684h4.443c0-3.382-.313-6.858-.964-10.473l-.329-1.827H985.65v20.486h50.625v-2.225l-2.212-.191c-.98 11.196-4.539 19.627-10.535 25.66-9.545 9.525-21.26 14.226-35.657 14.253-13.51-.018-24.973-4.677-34.857-14.194-9.788-9.483-14.657-21.59-14.682-36.905.025-15.315 4.894-27.422 14.682-36.905 9.884-9.517 21.346-14.176 34.857-14.194 15.022.036 26.365 5.007 34.791 15.046l1.562 1.86 13.424-13.463 1.44-1.442-1.311-1.558c-5.458-6.517-12.73-11.69-21.668-15.53-8.955-3.852-18.405-5.782-28.238-5.782-19.749-.017-36.792 6.936-50.616 20.696-13.875 13.733-20.869 30.995-20.85 51.272-.019 20.268 6.975 37.54 20.859 51.281 13.815 13.751 30.858 20.696 50.607 20.678 20.567.018 37.628-6.824 50.575-20.444l-1.607-1.538 1.571 1.574c11.507-11.517 17.216-27.075 17.201-46.135h-2.222m102.395-55.767h-60.7v42.33h54.74v16.042h-54.74v42.33h60.7v16.401h-77.812V155.755h77.812v16.401"/><path fill="#FFF" d="M1155.784 172.156v-2.225h-62.921v46.78h54.739v11.586l-54.74.006v46.78h60.7v11.951h-73.368V157.98h73.368v14.176h2.222v-2.225 2.225h2.221V153.53h-82.254v137.954h82.254v-20.851h-60.7v-37.88h54.74v-20.492h-54.74v-37.88h60.7v-2.225h-2.221m72.224 117.104h-17.138V172.155h-37.228v-16.401h91.594v16.401h-37.228v117.103"/><path fill="#FFF" d="M1228.008 289.26v-2.226h-14.917V169.931h-37.227v-11.95h87.15v11.95h-37.227v119.328h2.221v-2.225 2.225h2.222V174.381h37.227V153.53h-96.036v20.85h37.227v117.103h21.582v-2.225h-2.222m103.499.002V155.754h17.121v133.504h-17.121"/><path fill="#FFF" d="M1331.507 289.26h2.222V157.98h12.677v129.054h-14.899v2.225h2.222-2.222v2.225h19.342V153.53h-21.563v137.954h2.221v-2.225m93.093.001h-17.138V172.155h-37.226v-16.401h91.592v16.401H1424.6v117.103"/><path fill="#FFF" d="M1424.6 289.26v-2.226h-14.917V169.931h-37.225v-11.95h87.148v11.95h-37.227v119.328h2.221v-2.225 2.225h2.222V174.381h37.227V153.53h-96.034v20.85h37.225v117.103h21.582v-2.225h-2.222m125.532-28.428c9.865 10.003 21.937 15 36.212 15 14.275 0 26.353-4.997 36.203-15 9.875-10.004 14.822-22.792 14.822-38.323 0-15.53-4.947-28.318-14.822-38.322-9.85-10.004-21.928-15.002-36.203-15.002-14.275 0-26.347 4.998-36.212 15.002-9.85 10.004-14.795 22.791-14.795 38.322 0 15.531 4.945 28.319 14.795 38.323zm85.084 11.176c-13.104 13.497-29.4 20.235-48.872 20.235-19.491 0-35.78-6.738-48.855-20.235-13.113-13.482-19.638-29.985-19.638-49.499 0-19.514 6.525-36.02 19.638-49.499 13.076-13.5 29.364-20.244 48.855-20.244 19.369 0 35.621 6.78 48.786 20.331 13.146 13.55 19.724 30.02 19.724 49.412 0 19.514-6.562 36.017-19.638 49.499z"/><path fill="#FFF" d="M1550.132 260.83l-1.58 1.564c10.232 10.404 22.997 15.689 37.792 15.662 14.786.027 27.568-5.258 37.783-15.662 10.299-10.414 15.479-23.886 15.463-39.887.015-16-5.164-29.473-15.463-39.887-10.215-10.404-22.997-15.688-37.783-15.662-14.795-.026-27.56 5.258-37.792 15.662-10.274 10.414-15.464 23.887-15.437 39.887-.027 16 5.163 29.473 15.437 39.887l1.58-1.564 1.58-1.565c-9.424-9.605-14.136-21.687-14.154-36.758.018-15.07 4.73-27.152 14.153-36.758 9.51-9.603 20.869-14.314 34.633-14.34 13.753.026 25.138 4.737 34.624 14.34 9.441 9.606 14.153 21.688 14.17 36.758-.017 15.07-4.729 27.153-14.17 36.758-9.486 9.604-20.87 14.314-34.624 14.34-13.764-.026-25.123-4.736-34.633-14.34zm85.084 11.176l-1.588-1.546c-12.738 13.072-28.315 19.53-47.284 19.556-18.978-.027-34.555-6.484-47.269-19.556l-.06-.07.06.07c-12.711-13.117-18.984-28.935-19.002-47.953.018-19.018 6.291-34.836 19.002-47.952 12.714-13.073 28.29-19.539 47.269-19.565 18.847.026 34.388 6.519 47.197 19.66 12.756 13.177 19.065 28.97 19.092 47.857-.027 19.018-6.318 34.836-19.005 47.953l1.588 1.546 1.598 1.546c13.466-13.853 20.277-31.037 20.262-51.045.016-19.894-6.822-37.043-20.351-50.958-13.536-13.97-30.492-21.034-50.381-21.01-19.993-.024-37.001 7.007-50.452 20.923v-.01c-13.493 13.863-20.28 31.047-20.262 51.055-.018 20.008 6.769 37.192 20.262 51.054l.06.063-.06-.072c13.451 13.916 30.459 20.932 50.452 20.914 19.984.018 36.992-6.998 50.47-20.914l-1.598-1.546zm43.674 17.254V155.754h20.845l64.778 103.857h.738l-.738-25.728v-78.129h17.139v133.504h-17.877l-67.772-108.89h-.738l.738 25.737v83.153h-17.112"/><path fill="#FFF" d="M1678.89 289.26h2.222V157.98h17.39l64.778 103.857h4.252l-.798-27.986v-75.87h12.696v129.053h-14.422l-67.772-108.89h-4.252l.797 27.998v80.892h-14.89v2.225h2.221-2.221v2.225h19.333v-85.413l-.737-25.762-2.222.06v2.225h.738v-2.225l-1.884 1.183 68.424 109.932h21.33V153.53h-21.581v80.38l.737 25.762 2.222-.06v-2.225h-.738v2.225l1.884-1.181-65.432-104.901h-24.295v137.954h2.222v-2.225m696.668 378.262h41.452v-278.16h-41.453zm373.363-177.96l-47.517 120.596h-1.422l-49.317-120.597h-44.652l73.953 168.556-42.163 93.758h43.252l113.962-262.314zm-235.077 146.367c-13.595 0-32.522-6.798-32.522-23.624 0-21.47 23.592-29.7 43.94-29.7 18.24 0 26.792 3.936 37.877 9.31-3.221 25.761-25.37 44.014-49.295 44.014zm4.999-152.453c-30.013 0-61.091 13.245-73.953 42.59l36.787 15.384c7.864-15.384 22.504-20.4 37.877-20.4 21.437 0 43.23 12.89 43.585 35.793v2.86c-7.509-4.295-23.57-10.735-43.23-10.735-39.653 0-80.04 21.824-80.04 62.623 0 37.219 32.523 61.198 68.955 61.198 27.88 0 43.23-12.525 52.893-27.195h1.422v21.468h40.009V560.413c0-49.376-36.788-76.938-84.305-76.938zm-256.181 39.946h-58.958v-95.346h58.958c30.99 0 48.584 25.7 48.584 47.672 0 21.556-17.595 47.674-48.584 47.674zm-1.066-134.06h-99.323v278.16h41.43V562.135h57.893c45.94 0 91.102-33.316 91.102-86.388 0-53.07-45.162-86.386-91.102-86.386zm-541.619 246.618c-28.637 0-52.613-24.015-52.613-57 0-33.331 23.976-57.712 52.613-57.712 28.273 0 50.461 24.38 50.461 57.712 0 32.985-22.188 57-50.46 57zm47.597-130.843h-1.432c-9.302-11.11-27.205-21.147-49.748-21.147-47.242 0-90.543 41.58-90.543 94.99 0 53.055 43.3 94.279 90.543 94.279 22.543 0 40.446-10.04 49.748-21.504h1.432v13.62c0 36.211-19.324 55.567-50.46 55.567-25.41 0-41.158-18.288-47.607-33.699l-36.14 15.055c10.378 25.092 37.937 55.923 83.747 55.923 48.672 0 89.83-28.684 89.83-98.582V489.725h-39.37zm67.998 162.385h41.515v-278.17h-41.515zm102.716-91.766c-1.075-36.567 28.273-55.202 49.386-55.202 16.474 0 30.425 8.24 35.068 20.08zm128.84-31.543c-7.865-21.156-31.857-60.223-80.887-60.223-48.672 0-89.11 38.355-89.11 94.634 0 53.055 40.082 94.635 93.762 94.635 43.312 0 68.37-26.528 78.745-41.939l-32.212-21.512c-10.73 15.776-25.413 26.172-46.533 26.172-21.113 0-36.141-9.682-45.81-28.675l126.332-52.34zm-1006.512-31.186v40.147h95.912c-2.863 22.582-10.379 39.07-21.833 50.542-13.953 13.985-35.785 29.396-74.08 29.396-59.053 0-105.217-47.675-105.217-106.822 0-59.146 46.164-106.827 105.218-106.827 31.854 0 55.11 12.549 72.291 28.68l28.273-28.316c-23.976-22.947-55.832-40.511-100.564-40.511-80.886 0-148.884 65.96-148.884 146.974 0 81.015 67.998 146.969 148.884 146.969 43.665 0 76.588-14.332 102.352-41.224 26.485-26.528 34.72-63.806 34.72-93.914 0-9.327-.713-17.923-2.153-25.094zm246.115 122.953c-28.637 0-53.333-23.66-53.333-57.356 0-34.055 24.696-57.356 53.333-57.356 28.626 0 53.322 23.301 53.322 57.356 0 33.697-24.696 57.356-53.322 57.356zm0-151.99c-52.258 0-94.848 39.788-94.848 94.634 0 54.488 42.59 94.635 94.848 94.635 52.247 0 94.837-40.147 94.837-94.635 0-54.846-42.59-94.634-94.837-94.634zm206.89 151.99c-28.625 0-53.324-23.66-53.324-57.356 0-34.055 24.699-57.356 53.325-57.356 28.628 0 53.324 23.301 53.324 57.356 0 33.697-24.696 57.356-53.324 57.356zm0-151.99c-52.255 0-94.836 39.788-94.836 94.634 0 54.488 42.581 94.635 94.837 94.635 52.249 0 94.84-40.147 94.84-94.635 0-54.846-42.591-94.634-94.84-94.634z"/><path fill="#00C1FF" d="M233.446 169.357c-7.455 6.737-11.905 17.974-11.905 32.89v-3.372 492.21-3.242c0 13.775 3.817 24.413 10.281 31.264l1.65 1.582v.007c5.232 4.729 11.941 7.24 19.63 7.232 7.513 0 15.966-2.399 24.887-7.465l322.452-183.508 110.76-63.041c14.067-8.004 21.964-18.33 23.284-28.848v-.043c-1.32-10.542-9.217-20.86-23.283-28.865l-110.77-63.033L277.99 169.617c-8.94-5.075-17.399-7.483-24.932-7.483-7.68 0-14.38 2.503-19.61 7.223z"/><path d="M12.047.234l-1.651 1.582C3.932 8.666.115 19.305.115 33.08v-3.242 492.088-3.25c0 14.916 4.45 26.153 11.905 32.89l275.237-275.675L12.047.234" fill="url(#k)" transform="matrix(1 0 0 -1 221.426 720.923)"/><path d="M92.444.738L.686 92.66l91.75 91.907 110.769-63.032c14.066-8.006 21.963-18.323 23.283-28.866v-.042c-1.32-10.518-9.217-20.845-23.283-28.848L92.445.739" fill="url(#l)" transform="matrix(1 0 0 -1 507.997 537.692)"/><path d="M20.068.12C12.38.113 5.671 2.625.44 7.353v.007l275.21 275.657 91.758-91.922L44.955 7.586C36.034 2.519 27.581.12 20.068.12" fill="url(#m)" transform="matrix(1 0 0 -1 233.034 728.048)"/><path d="M275.428.707L.19 276.382c5.232 4.72 11.932 7.223 19.611 7.223 7.533 0 15.993-2.407 24.932-7.483L367.177 92.614 275.427.707" fill="url(#n)" transform="matrix(1 0 0 -1 233.255 445.74)"/><path d="M22.077.861c-7.688 0-14.406 2.512-19.638 7.24l-.009-.008a.635.635 0 01-.069.06L.93 9.553c-.045.044-.087.095-.14.146l1.65 1.653c5.232-4.728 11.94-7.24 19.63-7.231 7.512 0 15.965 2.398 24.886 7.465l322.452 183.508 2.066-2.07-2.092-1.19L46.955 8.336C38.825 3.72 31.092 1.313 24.107.912a41.848 41.848 0 00-2.03-.05" fill="url(#o)" transform="matrix(1 0 0 -1 231.034 732.048)"/><path d="M10.396.799C3.932 7.649.115 18.279.115 32.063v3.242c0-13.775 3.817-24.413 10.281-31.264l1.65-1.582-1.65-1.66" fill="url(#p)" transform="matrix(1 0 0 -1 221.426 723.148)"/><path d="M2.708.169L.642 2.239l110.76 63.04c14.067 8.003 21.964 18.33 23.284 28.848 0-3.86-.86-7.719-2.568-11.475-3.446-7.57-10.352-14.723-20.715-20.624L2.708.168" fill="url(#q)" transform="matrix(1 0 0 -1 599.799 539.192)"/><path d="M134.686.716c-1.32 10.543-9.217 20.86-23.283 28.866L.633 92.614l2.066 2.07h.009l108.695-61.86c15.508-8.831 23.274-20.468 23.283-32.108" fill="url(#r)" transform="matrix(1 0 0 -1 599.799 445.74)"/><path d="M.115.234v3.4c0 1.226.033 2.425.096 3.589v.053c0 .016 0 .033.006.051v.131c.669 11.865 4.348 21.12 10.179 27.3l1.624-1.633C4.565 26.387.115 15.15.115.234" fill="url(#s)" transform="matrix(1 0 0 -1 221.426 202.481)"/><path d="M369.398.66L46.955 184.17c-8.939 5.075-17.398 7.482-24.931 7.482-7.68 0-14.38-2.503-19.611-7.223l-1.624 1.634a29.747 29.747 0 001.58 1.555c.017.018.044.036.061.053 5.19 4.684 11.819 7.187 19.43 7.232h.164c7.533 0 15.992-2.408 24.931-7.485L371.473 2.737l-.009-.007-2.066-2.07" fill="url(#t)" transform="matrix(1 0 0 -1 231.034 353.786)"/></g></svg>
            </div>
          </div>

          <div className="col"></div>

          <div className="col"></div>

          <div className="col pt-5">
            <div className="text-muted px-3" style={{display: "inline-block"}}>

              <svg style={{marginRight: "15px"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
              
              <svg style={{marginRight: "15px"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>

            </div>
            <br /><br />

            <div className="text-muted" style={{fontSize: "12px"}}>
              Copyright Upop@2021
            </div>

          </div>

        </div>
      </div>

    </footer>
    </Fragment>
  )
}
