"use client";
import React from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import CategoryList from "./CategoryList";
import NavbarBlogItem from "./NavbarBlogItem";
import TagList from "./TagList";
import { FaChevronRight } from "react-icons/fa";
const FilterBar = ({ categoryList, recentPosts }) => {
  const items = [
    { key: 0, title: "May 2021" },
    { key: 1, title: "April 2021" },
    { key: 2, title: "August 2020" },
  ];
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
              {items.map(({ key, title }) => (
                <li key={key}>
                  <FaChevronRight size={10} />
                  <Link href={"#"} onClick={() => {}}>
                    {title}
                  </Link>
                </li>
              ))}
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
