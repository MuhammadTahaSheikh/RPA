import React, { useEffect, useRef, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
// import arrowdown from "../../Assets/arrow_down.png";
// import serachsms from "../../Assets/search_icon.png";
import arrowdown from "../../Assets/arrow_up.svg";
import serachsms from "../../Assets/brain.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "quill/dist/quill.snow.css";
// import "highlight.js/styles/monokai-sublime.css";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Header_main from "../Header/Header_main";
import Header_navbar from "../Header/Header_navbar";
import Footer from "../FooterRpa/Footer";
function Dashboard() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/api/categories", { name });
      alert("Category saved successfully");
      setName("");
    } catch (error) {
      console.error("Error saving category:", error);
      alert("Error saving category");
    }
  };

  const [blogdescription, setBlogDescription] = useState("");

  const handleCKEditorChange = (event, editor) => {
    const data = editor.getData();
    setBlogDescription(data);
  };
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Show the scroll-to-top button when the user has scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    scrollToTop();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const [notificationMessageRed, setnotificationMessageRed] = useState(null);
  const [notificationMessage, setnotificationMessage] = useState(null);

  // GET tags NAME
  const [tagsname, settagsname] = useState([]);
  const [storetags, setstoretags] = useState([]);

  console.log(storetags, "storetags");
  useEffect(() => {
    gettagsdata();
  }, []);

  const gettagsdata = () => {
    axios
      .get(`/api/tags`)
      .then((res) => {
        settagsname(res.data.tags);
      })
      .catch((error) => {
        console.error("Error fetching tags:", error);
      });
  };

  const [dropdownOpentags, setDropdownOpentags] = useState(false);
  const [filtertags, setFiltertags] = useState("");
  const [selectedOptiontags, setSelectedOptiontags] = useState("");
  const dropdownReftags = useRef(null);

  useEffect(() => {
    // Add event listeners when the component mounts
    document.addEventListener("click", handleOutsideClicktags);
    window.addEventListener("scroll", handleScrolltags);

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClicktags);
      window.removeEventListener("scroll", handleScrolltags);
    };
  }, []);

  const toggleDropdowntags = () => {
    setDropdownOpentags(!dropdownOpentags);
  };

  const handleFilterChangetags = (event) => {
    const filterText = event.target.value.toLowerCase(); // Convert filter text to lowercase
    setFiltertags(filterText);
    // Keep the dropdown open when typing
    // setDropdownOpentags(true); // You can remove this line
  };

  const [selectedtags, setSelectedtags] = useState([]);

  const handleOptionChangetags = (option) => {
    const selectedtag = tagsname.find((item) => item.name === option);

    if (selectedtag) {
      setSelectedOptiontags(option);

      // Use spread operator to create a new array with the selected ID
      // and all previously selected IDs
      setSelectedtags((prevSelectedtags) => [
        ...prevSelectedtags,
        selectedtag.id,
      ]);

      setDropdownOpentags(false);
    }
  };
  const handleOutsideClicktags = (event) => {
    if (
      dropdownReftags.current &&
      !dropdownReftags.current.contains(event.target)
    ) {
      // Clicked outside the dropdown or input field, close it
      setDropdownOpentags(false);
    }
  };

  const handleScrolltags = () => {
    // Scrolling detected, close the dropdown
    setDropdownOpentags(false);
  };

  // GET category NAME
  const [categoryname, setcategoryname] = useState([]);
  const [storecategory, setstorecategory] = useState([]);

  console.log(storecategory, "storecategory");

  useEffect(() => {
    getCategorydata();
  }, []);

  const getCategorydata = () => {
    axios
      .get(`/api/categories`)
      .then((res) => {
        setcategoryname(res.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  };

  const [dropdownOpencategory, setDropdownOpencategory] = useState(false);
  const [filtercategory, setFiltercategory] = useState("");
  const [selectedOptioncategory, setSelectedOptioncategory] = useState("");
  const dropdownRefcategory = useRef(null);

  useEffect(() => {
    // Add event listeners when the component mounts
    document.addEventListener("click", handleOutsideClickcategory);
    window.addEventListener("scroll", handleScrollcategory);

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClickcategory);
      window.removeEventListener("scroll", handleScrollcategory);
    };
  }, []);

  const toggleDropdowncategory = () => {
    setDropdownOpencategory(!dropdownOpencategory);
  };

  const handleFilterChangecategory = (event) => {
    const filterText = event.target.value.toLowerCase(); // Convert filter text to lowercase
    setFiltercategory(filterText);
    // Keep the dropdown open when typing
    // setDropdownOpencategory(true); // You can remove this line
  };

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleOptionChangecategory = (option) => {
    const selectedCategory = categoryname.find((item) => item.name === option);

    if (selectedCategory) {
      setSelectedOptioncategory(option);

      setSelectedCategories((prevSelectedCategories) => [
        ...prevSelectedCategories,
        selectedCategory.id,
      ]);

      setDropdownOpencategory(false);
    }
  };

  const handleOutsideClickcategory = (event) => {
    if (
      dropdownRefcategory.current &&
      !dropdownRefcategory.current.contains(event.target)
    ) {
      // Clicked outside the dropdown or input field, close it
      setDropdownOpencategory(false);
    }
  };

  const handleScrollcategory = () => {
    // Scrolling detected, close the dropdown
    setDropdownOpencategory(false);
  };

  const [blogtitle, setblogtitle] = useState("");

  const handleblogtitleChange = (event) => {
    setblogtitle(event.target.value);
  };

  const [blogImage, setBlogImage] = useState(null);

  const handleBlogImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setBlogImage(file);
    }
  };
  console.log(blogImage, "blogImage");

  const handletagideChange = (event) => {
    setBlogDescription(event.target.value);
  };
  const handleQuillChange = (content, delta, source, editor) => {
    setDescription(content);
  };
  console.log(blogdescription, "blogdescription");
  // const [blogdescription, setblogdescription] = useState("");

  // const handleblogdescriptionChange = (event) => {
  //   setblogdescription(event.target.value);
  // };

  const [blogquote, setblogquote] = useState("");
  const handleblogquoteChange = (value) => {
    setblogquote(value);
  };
  console.log(selectedCategories, "selectedCategories");
  const CreateBlog = (e) => {
    e.preventDefault();
    // let payload = {
    //   title: blogtitle,
    //   body: blogdescription,
    //   quote: blogquote,
    //   category_ids: selectedCategories,
    //   tag_ids: selectedtags,
    //   image: blogImage,
    // };

    const formData = new FormData();
    // if (blogImage) {
    formData.append("image", blogImage);
    // }
    formData.append("title", blogtitle);
    formData.append("body", blogdescription);
    formData.append("quote", blogquote);
    formData.append("category_id", selectedCategories);
    formData.append("tag_id", selectedtags);

    axiosInstance
      .post("/api/dashboard/posts", formData)
      .then((r) => {
        console.log(r);
        setblogquote("");
        setBlogDescription("");
        setBlogImage(null);
        setblogtitle("");
        setSelectedtags([]);
        setSelectedOptiontags("");
        setSelectedOptioncategory("");
        setSelectedCategories([]);
        setnotificationMessage(r.data.message);
        getblogsdetail();
        // clearvaluesincreatelead();

        setTimeout(() => {
          setnotificationMessage("");
        }, 4000);
      })
      .catch((e) => {
        if (e.response.data.errors != undefined) {
          // alert(e.response.data.message);
          setnotificationMessageRed(e.response.data.message);
          setTimeout(() => {
            setnotificationMessageRed("");
          }, 4000);
        }
      });
  };

  const [addcategoryname, setaddcategoryname] = useState("");
  const handleaddcategorynameChange = (event) => {
    setaddcategoryname(event.target.value);
  };
  const CreateCategory = (e) => {
    e.preventDefault();
    let payload = {
      name: addcategoryname,
    };
    axiosInstance
      .post("/api/categories", payload)
      .then((r) => {
        console.log(r);
        setaddcategoryname("");
        getCategorydata();
        setnotificationMessage(r.data.message);

        // clearvaluesincreatelead();

        setTimeout(() => {
          setnotificationMessage("");
        }, 4000);
      })
      .catch((e) => {
        if (e.response.data.errors != undefined) {
          // alert(e.response.data.message);
          setnotificationMessageRed(e.response.data.message);
          setTimeout(() => {
            setnotificationMessageRed("");
          }, 4000);
        }
      });
  };

  const [addtagname, setaddtagname] = useState("");
  const handleaddtagnameChange = (event) => {
    setaddtagname(event.target.value);
  };
  const Createtag = (e) => {
    e.preventDefault();
    let payload = {
      name: addtagname,
    };
    axiosInstance
      .post("/api/tags", payload)
      .then((r) => {
        console.log(r);
        setaddtagname("");
        gettagsdata();
        setnotificationMessage(r.data.message);

        // clearvaluesincreatelead();

        setTimeout(() => {
          setnotificationMessage("");
        }, 4000);
      })
      .catch((e) => {
        if (e.response.data.errors != undefined) {
          // alert(e.response.data.message);
          setnotificationMessageRed(e.response.data.message);
          setTimeout(() => {
            setnotificationMessageRed("");
          }, 4000);
        }
      });
  };

  useEffect(() => {
    getblogsdetail();
  }, []);

  const [blogsdetail, setblogsdetail] = useState("");

  const getblogsdetail = async () => {
    axiosInstance
      .get("/api/get-all-posts")
      .then((res) => {
        setblogsdetail(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blogadmin:", error);
      });
  };
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
  const [posttitle, setposttitle] = useState("");
  const handlesetposttitle = (title) => {
    setposttitle(title);
  };

  useEffect(() => {
    handleMenuItemClick();
    handlesetposttitle();
    handlesetsestatustposttoggle();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredModules = Array.isArray(blogsdetail.posts)
    ? blogsdetail?.posts.filter((sidebarMenu) => {
        const menuData = sidebarMenu?.title?.toLowerCase();
        return menuData && menuData.includes(searchQuery.toLowerCase());
      })
    : [];

  console.log(filteredModules, "filteredModules");

  console.log(filteredModules, "filteredModules");

  useEffect(() => {
    getcommentsdetail();
  }, [activeMenuItem]);

  const [commentsdetail, setcommentsdetail] = useState("");

  console.log(commentsdetail, "commentsdetail after selecting blog");

  const getcommentsdetail = async () => {
    axiosInstance
      .get(`/api/dashboard/posts/${activeMenuItem}/comments`)
      .then((res) => {
        setcommentsdetail(res?.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs post:", error);
      });
  };

  console.log(commentsdetail, "commentsdetail");

  useEffect(() => {
    getreplysdetail();
  }, [activeMenuItem]);

  const [replysdetail, setreplysdetail] = useState("");

  const getreplysdetail = async () => {
    axiosInstance
      .get(`/api/posts/${activeMenuItem}/comments`)
      .then((res) => {
        setreplysdetail(res?.data);
      })
      .catch((error) => {
        console.error("Error fetching post active:", error);
      });
  };

  console.log(replysdetail, "replysdetail");

  const handleApproveComment = (id) => {
    axiosInstance
      .put(`/api/dashboard/comments/${id}/update-approval-status`, {
        is_approved: "1",
      })
      .then((response) => {
        getcommentsdetail();
        console.log(
          "Permission status updated successfully:",
          response?.data?.message
        );
        setnotificationMessage(response?.data?.message);
        setTimeout(() => {
          setnotificationMessage("");
        }, 4000);
      })
      .catch((error) => {
        console.error("Error updating permission status:", error);
      });
  };

  const handleHideComment = (id) => {
    axiosInstance
      .put(`/api/dashboard/comments/${id}/update-approval-status`, {
        is_approved: "0",
      })
      .then((response) => {
        getcommentsdetail();
        console.log(
          "Permission status updated successfully:",
          response?.data?.message
        );
        setnotificationMessage(response?.data?.message);
        setTimeout(() => {
          setnotificationMessage("");
        }, 4000);
      })
      .catch((error) => {
        console.error("Error updating permission status:", error);
      });
  };

  const handleApproveReply = (id) => {
    axiosInstance
      .put(`/api/dashboard/comments/replies/${id}`, {
        is_approved: "1",
      })
      .then((response) => {
        getcommentsdetail();
        getreplysdetail();
        console.log(
          "Permission status updated successfully:",
          response?.data?.message
        );
        setnotificationMessage(response?.data?.message);
        setTimeout(() => {
          setnotificationMessage("");
        }, 4000);
      })
      .catch((error) => {
        console.error("Error updating permission status:", error);
      });
  };

  const handleHideReply = (id) => {
    axiosInstance
      .put(`/api/dashboard/comments/replies/${id}`, {
        is_approved: "0",
      })
      .then((response) => {
        getcommentsdetail();
        getreplysdetail();
        console.log(
          "Permission status updated successfully:",
          response?.data?.message
        );
        setnotificationMessage(response?.data?.message);
        setTimeout(() => {
          setnotificationMessage("");
        }, 4000);
      })
      .catch((error) => {
        console.error("Error updating permission status:", error);
      });
  };

  const handleDeleteComment = async (id) => {
    try {
      const response = await axiosInstance.delete(
        `/api/dashboard/blog/posts/comments/${id}`
      );
      getcommentsdetail();
      console.log(response, "delete response");
      setnotificationMessage(response.data.message);
      setTimeout(() => {
        setnotificationMessage("");
      }, 4000);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const [posttoggle, setposttoggle] = useState(0);

  const handlesetsestatustposttoggle = (status) => {
    setposttoggle(status);
  };
  console.log(posttoggle, "after selecting sidebar posts");

  const handleToggle = async () => {
    console.log("Before toggle:", posttoggle);
    const newStatus = posttoggle === 0 ? 1 : 0;
    console.log("After toggle:", newStatus);
    setposttoggle(newStatus);

    const apiUrl = `api/dashboard/posts/${activeMenuItem}/update-comments-status`;
    const payload = {
      is_commentable: newStatus,
    };

    try {
      const response = await axiosInstance.put(apiUrl, payload);
      // Handle response if needed
      getblogsdetail();
      setnotificationMessage(response?.data?.message);
      setTimeout(() => {
        setnotificationMessage("");
      }, 4000);
      console.log(response?.data?.message, "succeffully change");
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  };

  const quillFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "script",
    "indent",
    "direction",
    "color",
    "background",
    "align",
  ];

  const [idsetfordelete, setidsetfordelete] = useState("");
  const handlesetidfordeleteblog = (id) => {
    setidsetfordelete(id);
  };
  // const isModalDelete = useRef(null);

  console.log(idsetfordelete, "idsetfordelete");
  const handleDeleteBlog = async (id) => {
    try {
      const response = await axiosInstance.delete(`api/posts/${id}`);
      // isModalDelete.current.click();
      getblogsdetail();
      console.log(response, "delete response");
      setnotificationMessage(response.data.message);
      setTimeout(() => {
        setnotificationMessage("");
      }, 4000);
    } catch (error) {
      // isModalDelete.current.click();
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <Header_main />
      <Header_navbar />
      <div className="row m-0 p-0">
        <div className="col-lg-1 col-md-1 col-1"> </div>
        <div className="col-lg-10 col-md-10 col-10">
          <p className="main_heading_blog">Fill the Form to Add New Blog</p>

          <div className="main_div_blog_form">
            <form onSubmit={CreateBlog}>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12 pt-5">
                  <input
                    className="input__blog_title"
                    placeholder="Title"
                    value={blogtitle}
                    onChange={handleblogtitleChange}
                    required
                  />

                  <div
                    className="input__blog_title row"
                    onClick={toggleDropdowntags}
                  >
                    <div
                      className="dropdowni col-lg-10 col-md-10 col-10 m-0 p-0"
                      ref={dropdownReftags}
                    >
                      <button className="dropbtni">
                        {selectedOptiontags ? (
                          selectedOptiontags
                        ) : (
                          <span>
                            Tags <font color="red">*</font>
                          </span>
                        )}
                      </button>
                      <div
                        id="myDropdowni"
                        className={`dropdown-contenti ${
                          dropdownOpentags ? "showi" : ""
                        }`}
                      >
                        <input
                          type="text"
                          placeholder="Search.."
                          id="myInputi"
                          onClick={(e) => e.stopPropagation()}
                          onChange={handleFilterChangetags}
                          value={filtertags}
                        />
                        {tagsname ? (
                          tagsname
                            .filter((item) =>
                              item.name.toLowerCase().includes(filtertags)
                            )
                            .map((item) => (
                              <a
                                key={item.id}
                                onClick={() => {
                                  handleOptionChangetags(item.name);
                                  setstoretags(item.id);
                                }}
                              >
                                {item.name}
                              </a>
                            ))
                        ) : (
                          <Loader />
                        )}
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-2">
                      <img
                        src="{arrowdown}"
                        className="arrow_down_blog"
                        alt="Arrow Down"
                      />
                    </div>
                  </div>

                  <div className="editor-container">
                    <CKEditor
                      editor={ClassicEditor}
                      data={blogdescription}
                      onChange={handleCKEditorChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 pt-5">
                  <label className="input__blog_title">
                    <input
                      type="file"
                      accept="image/*"
                      className="upload_photo"
                      onChange={handleBlogImageChange}
                      required
                    />
                  </label>

                  <div
                    className="input__blog_title row"
                    onClick={toggleDropdowncategory}
                  >
                    <div
                      className="dropdowni col-lg-10 col-md-10 col-10 m-0 p-0 "
                      ref={dropdownRefcategory}
                    >
                      <button className="dropbtni">
                        {selectedOptioncategory ? (
                          selectedOptioncategory
                        ) : (
                          <span>
                            category <font color="red">*</font>
                          </span>
                        )}
                      </button>
                      <div
                        id="myDropdowni"
                        className={`dropdown-contenti ${
                          dropdownOpencategory ? "showi" : ""
                        }`}
                      >
                        <input
                          type="text"
                          placeholder="Search.."
                          id="myInputi"
                          onClick={(e) => e.stopPropagation()} // Prevent the click event from bubbling to the parent div
                          onChange={handleFilterChangecategory}
                          value={filtercategory}
                        />
                        {categoryname ? (
                          categoryname
                            .filter((item) =>
                              item.name.toLowerCase().includes(filtercategory)
                            )
                            .map((item) => (
                              <a
                                key={item.id}
                                onClick={() => {
                                  handleOptionChangecategory(item.name);
                                  setstorecategory(item.id);
                                }}
                              >
                                {item.name}
                              </a>
                            ))
                        ) : (
                          <Loader />
                        )}
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-2">
                      <img
                        src="{arrowdown}"
                        className="arrow_down_blog"
                        alt="Arrow Down"
                      />
                    </div>
                  </div>

                  <div className="editor-container">
                    <ReactQuill
                      className=""
                      placeholder="Quote"
                      value={blogquote}
                      onChange={handleblogquoteChange}
                      modules={quillModules}
                      formats={quillFormats}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <button className="create_blog_button" type="submit">
                    Create Blog
                  </button>
                </div>
                <div className="col-lg-6 col-md-12 col-12"></div>
              </div>
            </form>
          </div>

          <p className="main_heading_blog">Add New Category and Tag</p>

          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="main_div_add_category">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={name}
                    className="input_add_category"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Category Name"
                    required
                  />
                  <button type="submit">Save Category</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="main_div_add_tags">
                <form onSubmit={Createtag}>
                  <input
                    placeholder="Add Tag"
                    className="input_add_category"
                    required
                    value={addtagname}
                    onChange={handleaddtagnameChange}
                  />
                  <button className="Add_Category_button" type="submit">
                    Add Tag
                  </button>
                </form>
              </div>
            </div>
          </div>

          <>
            <p className="main_heading_blog">
              Approve/Hide Comments/Reply on the Blog
            </p>
            <div className="main_div_hideapprovecommnetspost">
              <div id="wrapper">
                <ul
                  className="navbar-nav sidebar_comment_main_div accordion"
                  id="accordionSidebar"
                >
                  <div className="search_div_sms d-flex flex-row">
                    <img
                      src="{serachsms}"
                      className="sms_icon_search"
                      alt="searchlogo"
                    />
                    <input
                      className="input_serach_sms"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>

                  <div className="main_div_sidebar_comment">
                    {filteredModules ? (
                      filteredModules?.map((sidebarMenu, index) => (
                        <li
                          className={`blog_sidebar_div ${
                            sidebarMenu.id === activeMenuItem
                              ? "blog_sidebar_div_active"
                              : ""
                          }`}
                          key={index}
                          onClick={() => {
                            handlesetsestatustposttoggle(
                              sidebarMenu?.is_commentable
                            );
                            handleMenuItemClick(sidebarMenu?.id);
                            handlesetposttitle(sidebarMenu?.title);
                          }}
                        >
                          <div
                            className="row main_div_sideblogs_display"
                            style={{
                              backgroundImage: `url(${sidebarMenu?.image_url})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                          >
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                              <button
                                className={`round_div_blog_person_image ${
                                  sidebarMenu.id === activeMenuItem
                                    ? "active_round_button"
                                    : ""
                                }`}
                              ></button>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                              <div className="d-flex justify-content-end">
                                <button
                                  className="delete_blog_button"
                                  data-toggle="modal"
                                  data-target="#exampleModalCenter"
                                  onClick={() => {
                                    handleDeleteBlog(sidebarMenu?.id);
                                  }}
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                              </div>

                              <p className="heading_sidebar_blogname">
                                {sidebarMenu?.title &&
                                sidebarMenu?.title.length > 18
                                  ? `${sidebarMenu?.title.slice(0, 18)}...`
                                  : sidebarMenu?.title}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))
                    ) : (
                      <Loader />
                    )}
                  </div>
                </ul>

                <div id="content-wrapper" className="d-flex flex-column">
                  <div id="content">
                    {posttitle ? (
                      posttitle && (
                        <>
                          <div className="main_comment_div_show">
                            <div className="d-flex justify-content-between profile_comment_main_div">
                              <div className="main_div_name_comment_open">
                                <p className="comment_open">
                                  {posttitle && posttitle.length > 30
                                    ? `${posttitle.slice(0, 30)}...`
                                    : posttitle}
                                </p>
                              </div>
                              <div className="main_div_name_comment_right_open row">
                                <div className="col-lg-8 col-md-8 col-8">
                                  <p className="comment_open1">Comments</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                  <input
                                    type="checkbox"
                                    id="switch"
                                    checked={posttoggle === 1}
                                    onChange={handleToggle}
                                  />
                                  <label
                                    className="toggleblogcomment"
                                    htmlFor="switch"
                                  >
                                    Toggle
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="add_blog_sms_message_show_main_div">
                              {commentsdetail ? (
                                commentsdetail?.comments?.map((data, index) => (
                                  <>
                                    <div
                                      className=" d-flex justify-content-end mb-3"
                                      key={index}
                                    >
                                      <div className="receive_comment">
                                        <div className="commnet_main_div ">
                                          <div className="d-flex bd-highlight">
                                            <p className="reseive_receive_comment_name_header flex-grow-1 bd-highlight">
                                              {data?.user?.first_name}
                                            </p>
                                            <div className="comment_no_style bd-highlight">
                                              {data?.order}
                                            </div>
                                            {data?.is_approved == "1" ? (
                                              <img
                                                className="bd-highlight green_commnet_style"
                                                src="{greencommnet}"
                                              />
                                            ) : null}
                                          </div>

                                          <p className="para_receive_comment_receive">
                                            {data?.body}
                                          </p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className=" d-flex justify-content-end button_div_approve_decline">
                                      {data?.is_approved == "0" ? (
                                        <button
                                          className="approve_button_comment"
                                          onClick={() => {
                                            handleApproveComment(data?.id);
                                          }}
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Approve the comment to show in blogs module"
                                        >
                                          Approve
                                        </button>
                                      ) : null}

                                      {data?.is_approved == "1" ? (
                                        <button
                                          className="decline_button_comment"
                                          onClick={() => {
                                            handleHideComment(data?.id);
                                          }}
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Hide the comment in blogs module"
                                        >
                                          Hide
                                        </button>
                                      ) : null}
                                    </div>
                                  </>
                                ))
                              ) : (
                                <Loader />
                              )}
                            </div>
                          </div>
                        </>
                      )
                    ) : (
                      <p className="main_heading_blog p-3">
                        No Data (Please select the blog for the comments view)
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
        <div className="col-lg-1 col-md-1 col-1">
          <>
            {isVisible && (
              <button onClick={scrollToTop} className="scroll-to-top-button">
                <span>&uarr;</span>
              </button>
            )}
          </>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;

// CategoryForm.js

// import React, { useState } from "react";
// import axios from "axios";

// const Dashboard = () => {
//   const [name, setName] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8081/api/categories", { name });
//       alert("Category saved successfully");
//       setName("");
//     } catch (error) {
//       console.error("Error saving category:", error);
//       alert("Error saving category");
//     }
//   };

//   return (
//     <div>
//       <h2>Add Category</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Category Name"
//           required
//         />
//         <button type="submit">Save Category</button>
//       </form>
//     </div>
//   );
// };

// export default Dashboard;
