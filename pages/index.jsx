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
import showroom from "../public/showroom.png"
import rocks from "../public/rocks.jpg"
import { Fragment } from "react-is"
import shortfatpic1 from "../public/shortfatpic1.jpg"
import shortfatpic2 from "../public/shortfatpic2.jpg"
import longskinny1 from "../public/longskinny1.jpg"
import longpic from "../public/longpic.jpg"
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
      
      <span className="text-muted ps-2" style={{fontSize: "15px"}}>We are also available in</span>
  

    </div>

      </footer>
    </Fragment>
  )
}
