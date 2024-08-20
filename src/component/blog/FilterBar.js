"use client";
import React from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import CategoryList from "./CategoryList";
import NavbarBlogItem from "./NavbarBlogItem";
import TagList from "./TagList";
const FilterBar = ({ categoryList, recentPosts }) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50">
      <SearchInput />
      <div className="block block-post-cats">
        <div className="block-title">
          <h2>Categories</h2>
        </div>
        <CategoryList categoryList={categoryList} />
      </div>

      <div className="block block-posts">
        <div className="block-title">
          <h2>Recent Posts</h2>
        </div>
        <div className="block-content">
          <ul className="posts-list">
            {recentPosts?.map((item) => (
              <NavbarBlogItem key={item._id} blog={item} />
            ))}
          </ul>
        </div>
      </div>

      <div className="block block-post-archives">
        <div className="block-title">
          <h2>Archives</h2>
        </div>
        <div className="block-content">
          <div className="post-archives-list">
            <ul>
              <li>
                <Link href={"#"} onClick={() => {}}>
                  May 2021
                </Link>
              </li>
              <li>
                <Link href={"#"} onClick={() => {}}>
                  April 2021
                </Link>
              </li>
              <li>
                <Link href={"#"} onClick={() => {}}>
                  August 2020
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="block block-post-tags">
        <div className="block-title">
          <h2>Tags</h2>
        </div>
        <div className="block-content">
          <div className="post-tags-list">
            <TagList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
