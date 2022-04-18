import React, { Component } from "react";
import Logo from "../../components/logo";
import Profile from "../../components/profile";
import SearchBar from "../../components/searchBar";
import SideNav from "../../components/sideNav";
import MenuIcon from "../../icons/Menu";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: "hidden" };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (this.state.menu === "hidden") {
      this.setState({ menu: "translate-x-0" });
    } else {
      this.setState({ menu: "hidden" });
    }
  }
  render() {
    return (
      <div className="h-screen w-screen bg-gray-100  ">
        <div className="relative z-20">
          <div className="md:fixed">
            <div className=" h-screen w-screen md:h-24 relative transform transition ease-out duration-500">
              {/* cover image for phones */}
              <img
                src="./images/ca-1.jpeg"
                alt="background"
                className="h-full w-full object-cover z-0 "
              />

              {/* black transparent cover */}
              <div className="w-full h-full md:h-24 bg-black absolute z-10 top-0 opacity-70"></div>
              {/* logo */}
              <div className=" flex absolute top-0 z-20 justify-center items-center w-full h-full">
                <Logo />
              </div>
            </div>
            <div className="fixed top-7 left-8 z-30 ">
              <MenuIcon onClick={() => this.toggleMenu()} />
            </div>
            <div className="fixed top-7 right-8 z-30 ">
              <Profile />
            </div>
          </div>
          <div
            className={`w-44 md:w-64 border fixed top-0 h-screen z-40 ${this.state.menu}`}
          >
            <SideNav menuToggle={() => this.toggleMenu()} />
          </div>
        </div>
        {/* main content */}
        <div className=" relative z-0 md:top-28 overflow-y-scroll  ">
          <div className="flex justify-center">
            <SearchBar />
          </div>
          <div className="h-96 bg-red-900"></div>
          <div className="h-96 bg-blue-700"></div>
          <div className="h-96 bg-indigo-900"></div>
        </div>
      </div>
    );
  }
}
