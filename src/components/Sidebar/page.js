"use client";

import Link from "next/link";
import React from "react";
import "./Sidebar.css";
import { useEffect } from "react";

const Sidebar = () => {
  useEffect(() => {
    const allDropdown = document.querySelectorAll("#sidebar .side-dropdown");
    const sidebar = document.getElementById("sidebar");
    const toggleSidebar = document.querySelector("nav .toggle-sidebar");
    const allSideDivider = document.querySelectorAll("#sidebar .divider");

    const handleDropdownClick = (e) => {
      e.preventDefault();

      if (!e.target.classList.contains("active")) {
        allDropdown.forEach((item) => {
          const aLink = item.parentElement.querySelector("a:first-child");

          aLink.classList.remove("active");
          item.classList.remove("show");
        });
      }

      e.target.classList.toggle("active");
      e.target.parentElement
        .querySelector(".side-dropdown")
        .classList.toggle("show");
    };

    const handleToggleSidebar = () => {
      sidebar.classList.toggle("hide");

      if (sidebar.classList.contains("hide")) {
        allSideDivider.forEach((item) => {
          item.textContent = "-";
        });

        allDropdown.forEach((item) => {
          const a = item.parentElement.querySelector("a:first-child");
          a.classList.remove("active");
          item.classList.remove("show");
        });
      } else {
        allSideDivider.forEach((item) => {
          item.textContent = item.getAttribute("data-text");
        });
      }
    };
    const handleMouseLeave = () => {
      if (sidebar.classList.contains("hide")) {
        allDropdown.forEach((item) => {
          const a = item.parentElement.querySelector("a:first-child");
          a.classList.remove("active");
          item.classList.remove("show");
        });
        allSideDivider.forEach((item) => {
          item.textContent = "-";
        });
      }
    };
    const handleMouseEnter = () => {
      if (sidebar.classList.contains("hide")) {
        allDropdown.forEach((item) => {
          const a = item.parentElement.querySelector("a:first-child");
          a.classList.remove("active");
          item.classList.remove("show");
        });
        allSideDivider.forEach((item) => {
          item.textContent = item.getAttribute("data-text");
        });
      }
    };

    allDropdown.forEach((item) => {
      item.parentElement
        .querySelector("a:first-child")
        .addEventListener("click", handleDropdownClick);
    });

    if (toggleSidebar) {
      toggleSidebar.addEventListener("click", handleToggleSidebar);
    }

    sidebar.addEventListener("mouseleave", handleMouseLeave);

    sidebar.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      allDropdown.forEach((item) => {
        item.parentElement
          .querySelector("a:first-child")
          .removeEventListener("click", handleDropdownClick);
      });

      if (toggleSidebar) {
        toggleSidebar.removeEventListener("click", handleToggleSidebar);
      }

      sidebar.removeEventListener("mouseleave", handleMouseLeave);

      sidebar.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bxs-widget icon"></i> weframetech
      </a>
      <ul className="side-menu">
        <li className="divider" data-text="Main Menu">
          Main Menu
        </li>
        <li>
          <a href="#" className="active">
            <i class="bx bxs-tachometer icon"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-inbox icon"></i> Email{" "}
            <i className="bx bx-chevron-right icon-right"></i>
          </a>
          <ul className="side-dropdown">
            <li>
              <a href="#">Sent</a>
            </li>
            <li>
              <a href="#">All Mail</a>
            </li>
            <li>
              <a href="#">Junk</a>
            </li>
            <li>
              <a href="#">Deleted</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="bx bxs-chat icon"></i> Chats
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-widget icon"></i> Kanban{" "}
            <i className="bx bx-chevron-right icon-right"></i>
          </a>
          <ul className="side-dropdown">
            <li>
              <a href="#">Basic</a>
            </li>
            <li>
              <a href="#">Select</a>
            </li>
            <li>
              <a href="#">Checkbox</a>
            </li>
            <li>
              <a href="#">Radio</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-contact icon"></i> Contact
          </a>
        </li>

        <li>
          <a href="#">
            <i className="bx bxs-notepad icon"></i> Courses{" "}
            <i className="bx bx-chevron-right icon-right"></i>
          </a>
          <ul className="side-dropdown">
            <li>
              <a href="#">Web Dev</a>
            </li>
            <li>
              <a href="#">Next JS</a>
            </li>
            <li>
              <a href="#">React JS</a>
            </li>
            <li>
              <a href="#">AI ML</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="bx bxs-store icon"></i> Shop
          </a>
        </li>

        <li>
          <a href="#">
            <i className="bx bxs-credit-card icon"></i> Invoice{" "}
            <i className="bx bx-chevron-right icon-right"></i>
          </a>
          <ul className="side-dropdown">
            <li>
              <a href="#">Successfull Payment</a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="bx bxs-cog icon"></i> Settings
          </a>
        </li>
      </ul>
      <div className="ads">
        <div className="wrapper">
          <div className="ok"></div>
          <p>Increase your</p>
          <p>
            work with <span>Kanban</span>
          </p>
          <i class="bx bx-right-arrow-alt icon"></i>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
