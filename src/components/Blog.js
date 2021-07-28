import React from "react";
import { Link } from "react-router-dom"; 
 

 


const Blog = (props) => {
  return (
    <>
      <div class="breadcrumb">
        <div class="container">
          <div class="breadcrumb-inner">
            <ul class="list-inline list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li class="active">Blog</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="body-content">
        <div class="container">
          <div class="row">
            <div class="blog-page">
              <div class="col-md-9">
                <div class="blog-post  wow fadeInUp">
                  <a href="blog-details.html">
                    <img   src="assets/images/blog-post/blog_big_01.jpg" alt="Image" />
                  </a>
                  <h1>
                    <a href="blog-details.html">{props.bdetail}</a>
                  </h1>
                  <span class="author">{props.aname}</span>
                  <span class="review">{props.review}</span>
                  <span class="date-time">{props.date}</span>
                  <p>{props.para}</p>
                  <a href="#" class="btn btn-upper btn-primary read-more">
                    read more
                  </a>
                </div>
                <div class="clearfix blog-pagination filters-container  wow fadeInUp">
                  <div class="text-right">
                    <div class="pagination-container">
                      <ul class="list-inline list-unstyled">
                        <li class="prev">
                          <a href="#">
                            <i class="fa fa-angle-left"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li class="active">
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li class="next">
                          <a href="#">
                            <i class="fa fa-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>{" "}
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      
      </div>
 
    </>
  );
};

export default Blog
