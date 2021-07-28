import React from "react";
import { Link } from "react-router-dom";


export const Blogdetails = (props) => {
  return (
    <div>
      <div class="breadcrumb">
        <div class="container">
          <div class="breadcrumb-inner">
            <ul class="list-inline list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li class="active">Blog Details</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="body-content">
        <div class="container">
          <div class="row">
            <div class="blog-page">
              <div class="col-md-9">
                <div class="blog-post wow fadeInUp">
                  <img class="img-responsive" src={props.imgsrc} alt="" />
                  <h1>{props.title}</h1>
                  <span class="author">{props.name}</span>
                  <span class="review">{props.review}</span>
                  <span class="date-time">{props.date}</span>
                  <p> {props.para}</p>

                  <div class="social-media">
                    <span>share post:</span>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                    <a href="">
                      <i class="fa fa-rss"></i>
                    </a>
                    <a href="" class="hidden-xs">
                      <i class="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
                <div class="blog-post-author-details wow fadeInUp">
                  <div class="row">
                    <div class="col-md-2">
                      <img
                        src="assets/images/testimonials/member3.png"
                        alt="Responsive image"
                        class="img-circle img-responsive"
                      />
                    </div>
                    <div class="col-md-10">
                      <h4>{props.aname}</h4>
                      <div class="btn-group author-social-network pull-right">
                        <span>Follow me on</span>
                        <button
                          type="button"
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i class="twitter-icon fa fa-twitter"></i>
                          <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" role="menu">
                          <li>
                            <a href="#">
                              <i class="icon fa fa-facebook"></i>Facebook
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon fa fa-linkedin"></i>Linkedin
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="icon fa fa-pinterest"></i>Pinterst
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="icon fa fa-rss"></i>RSS
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span class="author-job">Web Designer</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <h3 class="title-review-comments">{props.tcomments}</h3>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <img
                      src="assets/images/testimonials/member1.png"
                      alt="Responsive image"
                      class="img-rounded img-responsive"
                    />
                  </div>
                  <div class="col-md-10 col-sm-10 blog-comments outer-bottom-xs">
                    <div class="blog-comments inner-bottom-xs">
                      <h4> {props.name}</h4>
                      <span class="review-action pull-right">
                        {props.dayago}
                        <a href=""> Repost</a> &sol;
                        <a href=""> Reply</a>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                    </div>

                    <div class="post-load-more col-md-12">
                      <a class="btn btn-upper btn-primary" href="#">
                        Load more
                      </a>
                    </div>
                  </div>
                </div>
                <div class="blog-write-comment outer-bottom-xs outer-top-xs">
                  <div class="row">
                    <div class="col-md-12">
                      <h4>Leave A Comment</h4>
                    </div>
                    <div class="col-md-4">
                      <form class="register-form" role="form">
                        <div class="form-group">
                          <label class="info-title" for="exampleInputName">
                            Your Name <span>*</span>
                          </label>
                          <input
                            type="email"
                            class="form-control unicase-form-control text-input"
                            id="exampleInputName"
                            placeholder=""
                          />
                        </div>
                      </form>
                    </div>
                    <div class="col-md-4">
                      <form class="register-form" role="form">
                        <div class="form-group">
                          <label class="info-title" for="exampleInputEmail1">
                            Email Address <span>*</span>
                          </label>
                          <input
                            type="email"
                            class="form-control unicase-form-control text-input"
                            id="exampleInputEmail1"
                            placeholder=""
                          />
                        </div>
                      </form>
                    </div>
                    <div class="col-md-4">
                      <form class="register-form" role="form">
                        <div class="form-group">
                          <label class="info-title" for="exampleInputTitle">
                            Title <span>*</span>
                          </label>
                          <input
                            type="email"
                            class="form-control unicase-form-control text-input"
                            id="exampleInputTitle"
                            placeholder=""
                          />
                        </div>
                      </form>
                    </div>
                    <div class="col-md-12">
                      <form class="register-form" role="form">
                        <div class="form-group">
                          <label class="info-title" for="exampleInputComments">
                            Your Comments <span>*</span>
                          </label>
                          <textarea
                            class="form-control unicase-form-control"
                            id="exampleInputComments"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-12 outer-bottom-small m-t-20">
                      <button
                        type="submit"
                        class="btn-upper btn btn-primary checkout-page-button"
                      >
                        Submit Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
                  {/* <!-- ==============================================CATEGORY============================================== --> */}

                  {/* <!-- ============================================== PRODUCT TAGS : END ============================================== --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      
    
  );
};
