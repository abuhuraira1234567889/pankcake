import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [slide, setSlide] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth);
  const navOpen = () => {
    setSlide(!slide);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <>
      <div className="navbar-wrapper">
        <div className="">
          <div className="nav-main">
            <div className="nav-logo">
              <Link to="/">
                <svg
                  viewBox="0 0 1281 199"
                  class="svg-icon"
                  color="text"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M247.013 153.096c-2.979 0-5.085-.617-6.318-1.849-1.13-1.233-1.695-3.185-1.695-5.856v-89.22c0-2.672.616-4.624 1.849-5.856 1.233-1.336 3.287-2.004 6.164-2.004h37.753c14.382 0 24.963 3.031 31.744 9.092 6.78 6.061 10.17 15.101 10.17 27.12 0 11.917-3.39 20.906-10.17 26.967-6.678 5.959-17.259 8.938-31.744 8.938h-14.639v24.963c0 2.671-.616 4.623-1.849 5.856-1.233 1.232-3.339 1.849-6.318 1.849h-14.947zm35.288-55.012c4.212 0 7.448-1.13 9.708-3.39 2.362-2.26 3.544-5.65 3.544-10.17 0-4.623-1.182-8.065-3.544-10.325-2.26-2.26-5.496-3.39-9.708-3.39h-12.174v27.275h12.174zM363.071 155.407c-9.656 0-17.412-3.082-23.268-9.245-5.753-6.267-8.629-15.05-8.629-26.351 0-8.629 1.952-16.18 5.855-22.652 4.007-6.472 9.606-11.454 16.797-14.947 7.294-3.595 15.666-5.393 25.117-5.393 7.808 0 14.691.873 20.649 2.62 6.061 1.643 11.608 4.057 16.642 7.242v61.638c0 1.952-.359 3.236-1.079 3.852-.719.617-2.157.925-4.314.925h-15.718c-1.13 0-2.003-.154-2.619-.463-.617-.41-1.13-1.027-1.541-1.849l-2.004-4.622c-2.979 3.184-6.574 5.496-10.786 6.934-4.109 1.541-9.143 2.311-15.102 2.311zm11.558-20.957c4.006 0 7.139-.976 9.399-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.951-.925-4.417-1.387-7.396-1.387-5.445 0-9.811 1.9-13.098 5.701-3.185 3.801-4.777 9.143-4.777 16.026 0 9.965 4.16 14.947 12.482 14.947zM437.679 153.096c-2.98 0-5.086-.617-6.318-1.849-1.233-1.233-1.849-3.185-1.849-5.856V83.907c0-1.849.308-3.082.924-3.698.719-.72 2.157-1.079 4.315-1.079h15.872c1.232 0 2.157.206 2.773.617.719.308 1.13.924 1.233 1.849l.77 4.623c2.877-2.877 6.627-5.137 11.249-6.78 4.726-1.747 9.965-2.62 15.718-2.62 8.321 0 15.05 2.363 20.186 7.088 5.137 4.623 7.705 11.506 7.705 20.649v40.835c0 2.671-.616 4.623-1.849 5.856-1.13 1.232-3.185 1.849-6.164 1.849h-14.947c-2.979 0-5.136-.617-6.472-1.849-1.233-1.233-1.849-3.185-1.849-5.856v-38.832c0-3.082-.668-5.29-2.003-6.626-1.336-1.335-3.442-2.003-6.318-2.003-3.082 0-5.548.822-7.397 2.465-1.746 1.644-2.619 3.904-2.619 6.781v38.215c0 2.671-.617 4.623-1.849 5.856-1.13 1.232-3.185 1.849-6.164 1.849h-14.947zM564.725 155.407c-14.382 0-25.477-3.339-33.285-10.016-7.807-6.677-11.711-16.385-11.711-29.124 0-7.807 1.798-14.69 5.393-20.648 3.596-5.959 8.784-10.582 15.564-13.869 6.883-3.287 14.999-4.931 24.347-4.931 7.088 0 13.047.668 17.875 2.003 4.931 1.336 9.297 3.39 13.098 6.164 1.13.72 1.695 1.644 1.695 2.774 0 .822-.411 1.9-1.233 3.236l-6.318 10.94c-.719 1.439-1.592 2.158-2.619 2.158-.617 0-1.593-.411-2.928-1.233-2.774-1.746-5.393-3.03-7.859-3.852-2.363-.822-5.342-1.233-8.937-1.233-5.137 0-9.297 1.644-12.482 4.931-3.082 3.287-4.623 7.807-4.623 13.56 0 5.856 1.592 10.376 4.777 13.56 3.185 3.082 7.551 4.623 13.098 4.623 3.287 0 6.267-.462 8.938-1.387 2.671-.924 5.393-2.208 8.167-3.852 1.438-.822 2.465-1.233 3.082-1.233.924 0 1.746.719 2.465 2.158l6.934 11.865c.514 1.027.771 1.849.771 2.465 0 .925-.617 1.798-1.849 2.62-4.315 2.774-9.041 4.828-14.177 6.164-5.034 1.438-11.095 2.157-18.183 2.157zM638.004 155.407c-9.657 0-17.413-3.082-23.268-9.245-5.753-6.267-8.63-15.05-8.63-26.351 0-8.629 1.952-16.18 5.856-22.652 4.006-6.472 9.605-11.454 16.796-14.947 7.294-3.595 15.667-5.393 25.118-5.393 7.807 0 14.69.873 20.648 2.62 6.061 1.643 11.609 4.057 16.643 7.242v61.638c0 1.952-.36 3.236-1.079 3.852-.719.617-2.157.925-4.315.925h-15.717c-1.13 0-2.004-.154-2.62-.463-.616-.41-1.13-1.027-1.541-1.849l-2.003-4.622c-2.979 3.184-6.575 5.496-10.787 6.934-4.109 1.541-9.143 2.311-15.101 2.311zm11.557-20.957c4.007 0 7.14-.976 9.4-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.952-.925-4.417-1.387-7.397-1.387-5.444 0-9.81 1.9-13.098 5.701-3.184 3.801-4.777 9.143-4.777 16.026 0 9.965 4.161 14.947 12.482 14.947zM787.963 147.24c.719.822 1.079 1.747 1.079 2.774 0 .924-.308 1.695-.925 2.311-.616.514-1.438.771-2.465.771h-23.885c-1.438 0-2.517-.103-3.236-.308-.616-.309-1.284-.874-2.003-1.695l-20.957-28.508v22.806c0 2.671-.616 4.623-1.849 5.856-1.233 1.232-3.339 1.849-6.318 1.849h-14.947c-2.979 0-5.085-.617-6.318-1.849-1.13-1.233-1.695-3.185-1.695-5.856v-89.22c0-2.672.616-4.624 1.849-5.856 1.233-1.336 3.288-2.004 6.164-2.004h14.947c2.979 0 5.085.668 6.318 2.004 1.233 1.232 1.849 3.184 1.849 5.855v51.622l20.341-26.504c.616-.822 1.284-1.387 2.003-1.695.719-.309 1.798-.463 3.236-.463h23.885c1.027 0 1.797.309 2.311.925.616.514.925 1.233.925 2.157 0 1.028-.36 1.952-1.079 2.774l-26.35 30.203 27.12 32.051zM837.998 155.407c-8.629 0-16.334-1.438-23.114-4.314-6.677-2.877-11.968-7.192-15.872-12.944-3.903-5.753-5.855-12.79-5.855-21.111 0-13.047 3.698-23.012 11.095-29.895 7.396-6.883 18.029-10.324 31.897-10.324 13.561 0 23.834 3.39 30.819 10.17 7.089 6.678 10.633 15.975 10.633 27.891 0 5.137-2.26 7.705-6.78 7.705h-48.386c0 4.417 1.643 7.808 4.931 10.17 3.39 2.363 8.475 3.544 15.255 3.544 4.212 0 7.705-.359 10.479-1.078 2.876-.822 5.753-2.003 8.629-3.544 1.233-.514 2.055-.771 2.465-.771.925 0 1.695.617 2.312 1.849l5.239 9.862c.514 1.028.771 1.798.771 2.312 0 .924-.617 1.798-1.85 2.619-4.211 2.774-8.988 4.777-14.33 6.01-5.342 1.233-11.455 1.849-18.338 1.849zm11.866-48.077c0-3.904-1.13-6.935-3.39-9.092-2.26-2.157-5.651-3.236-10.171-3.236s-7.961 1.13-10.324 3.39c-2.363 2.158-3.544 5.137-3.544 8.938h27.429zM930.417 155.407c-8.63 0-16.797-.873-24.501-2.619-7.705-1.85-13.92-4.418-18.646-7.705-1.746-1.13-2.619-2.312-2.619-3.544 0-.822.308-1.695.924-2.62l7.551-12.019c.822-1.233 1.643-1.849 2.465-1.849.514 0 1.387.359 2.62 1.078 3.801 2.158 8.115 3.904 12.944 5.239 4.828 1.336 9.605 2.004 14.331 2.004 4.828 0 8.372-.719 10.632-2.158 2.363-1.438 3.544-3.749 3.544-6.934 0-3.082-1.284-5.496-3.852-7.242-2.466-1.747-7.14-3.955-14.023-6.626-10.375-3.904-18.491-8.27-24.347-13.099-5.753-4.93-8.629-11.608-8.629-20.032 0-10.17 3.647-17.926 10.941-23.268C907.046 48.67 916.753 46 928.876 46c8.423 0 15.615.77 21.573 2.311 6.061 1.439 11.197 3.699 15.409 6.78 1.747 1.336 2.62 2.569 2.62 3.699 0 .719-.308 1.54-.925 2.465l-7.55 12.02c-.925 1.232-1.747 1.849-2.466 1.849-.513 0-1.387-.36-2.619-1.079-5.959-3.904-13.047-5.855-21.265-5.855-4.418 0-7.808.719-10.171 2.157-2.362 1.438-3.544 3.801-3.544 7.088 0 2.26.617 4.11 1.849 5.548 1.233 1.438 2.877 2.722 4.931 3.852 2.158 1.027 5.445 2.363 9.862 4.007l2.928 1.078c7.602 2.98 13.561 5.856 17.875 8.63 4.418 2.67 7.756 6.009 10.016 10.016 2.26 3.903 3.39 8.834 3.39 14.793 0 9.143-3.441 16.437-10.324 21.881-6.78 5.445-16.796 8.167-30.048 8.167zM1003.53 153.096c-1.54 0-2.72-.257-3.544-.771-.822-.513-1.439-1.541-1.85-3.082l-19.878-66.569c-.205-.616-.308-1.078-.308-1.386 0-1.438 1.027-2.158 3.082-2.158h20.338c1.34 0 2.31.257 2.93.77.62.412 1.03 1.13 1.23 2.158l8.32 34.98 10.48-28.2c.52-1.232 1.03-2.054 1.54-2.465.62-.514 1.65-.77 3.09-.77h9.7c1.44 0 2.42.256 2.93.77.62.41 1.18 1.233 1.7 2.465l10.32 28.2 8.48-34.98c.3-1.027.71-1.746 1.23-2.157.51-.514 1.44-.77 2.77-.77h20.5c2.05 0 3.08.719 3.08 2.157 0 .308-.1.77-.31 1.386l-20.03 66.569c-.41 1.541-1.03 2.569-1.85 3.082-.72.514-1.85.771-3.39.771h-15.1c-1.44 0-2.52-.257-3.24-.771-.72-.616-1.33-1.643-1.85-3.082l-10.17-27.891-10.17 27.891c-.41 1.439-1.03 2.466-1.85 3.082-.72.514-1.79.771-3.23.771h-14.95zM1128.73 155.407c-9.66 0-17.41-3.082-23.27-9.245-5.75-6.267-8.63-15.05-8.63-26.351 0-8.629 1.95-16.18 5.86-22.652 4-6.472 9.6-11.454 16.79-14.947 7.3-3.595 15.67-5.393 25.12-5.393 7.81 0 14.69.873 20.65 2.62 6.06 1.643 11.61 4.057 16.64 7.242v61.638c0 1.952-.36 3.236-1.08 3.852-.72.617-2.15.925-4.31.925h-15.72c-1.13 0-2-.154-2.62-.463-.62-.41-1.13-1.027-1.54-1.849l-2-4.622c-2.98 3.184-6.58 5.496-10.79 6.934-4.11 1.541-9.14 2.311-15.1 2.311zm11.56-20.957c4 0 7.14-.976 9.4-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.96-.925-4.42-1.387-7.4-1.387-5.45 0-9.81 1.9-13.1 5.701-3.18 3.801-4.78 9.143-4.78 16.026 0 9.965 4.17 14.947 12.49 14.947zM1203.18 184.223c-2.98 0-5.08-.616-6.32-1.849-1.13-1.233-1.69-3.185-1.69-5.856V88.222c4.62-3.287 10.43-6.01 17.41-8.167 6.99-2.157 14.28-3.236 21.88-3.236 31.03 0 46.54 13.15 46.54 39.448 0 11.917-3.29 21.419-9.86 28.508-6.58 7.088-15.87 10.632-27.89 10.632-3.39 0-6.68-.411-9.87-1.233-3.08-.821-5.65-1.951-7.7-3.39v25.734c0 2.671-.62 4.623-1.85 5.856-1.23 1.233-3.34 1.849-6.32 1.849h-14.33zm33.44-49.619c4.42 0 7.71-1.643 9.86-4.931 2.26-3.39 3.39-7.91 3.39-13.56 0-6.677-1.33-11.352-4-14.023-2.57-2.773-6.58-4.16-12.02-4.16-3.5 0-6.27.462-8.32 1.387v24.501c0 3.493.97 6.164 2.92 8.013 1.96 1.849 4.68 2.773 8.17 2.773z"
                    fill="#000000"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M97.556 198.607c-29.192-.022-52.708-7.027-69.138-19.609-16.627-12.733-25.448-30.803-25.448-51.25 0-19.701 8.801-33.907 18.76-43.51 7.805-7.525 16.417-12.344 22.414-15.117-1.356-4.162-3.048-9.61-4.562-15.238-2.025-7.53-4.012-16.366-4.012-22.84 0-7.663 1.67-15.36 6.175-21.34C46.505 3.385 53.671 0 62.291 0c6.737 0 12.457 2.499 16.934 6.81 4.28 4.12 7.13 9.593 9.097 15.298 3.456 10.024 4.802 22.618 5.179 35.187h8.257c.378-12.569 1.723-25.163 5.18-35.187 1.967-5.705 4.815-11.177 9.096-15.298C120.512 2.5 126.231 0 132.968 0c8.621 0 15.786 3.385 20.546 9.703 4.505 5.98 6.176 13.677 6.176 21.34 0 6.474-1.988 15.31-4.013 22.84-1.514 5.628-3.206 11.076-4.562 15.238 5.997 2.773 14.61 7.592 22.414 15.118 9.959 9.602 18.76 23.808 18.76 43.509 0 20.447-8.82 38.517-25.448 51.25-16.43 12.582-39.946 19.587-69.138 19.609h-.147z"
                    fill="#633001"
                  ></path>
                  <path
                    d="M62.29 7.288c-12.625 0-18.437 9.516-18.437 22.675 0 10.46 6.753 31.408 9.523 39.563.624 1.835-.356 3.844-2.142 4.555-10.119 4.031-39.981 18.789-39.981 52.588 0 35.603 30.347 62.448 86.31 62.491l.066-.001.067.001c55.962-.043 86.309-26.888 86.309-62.491 0-33.799-29.862-48.557-39.981-52.588-1.786-.71-2.765-2.72-2.142-4.555 2.771-8.154 9.524-29.103 9.524-39.563 0-13.16-5.812-22.675-18.438-22.675-18.174 0-22.705 26.007-23.028 53.92-.021 1.863-1.513 3.375-3.357 3.375H88.676c-1.845 0-3.336-1.512-3.358-3.375-.323-27.913-4.853-53.92-23.028-53.92z"
                    fill="#D1884F"
                  ></path>
                  <path
                    d="M97.696 177.755c-41.118 0-86.372-22.235-86.443-51.018v.134c0 35.632 30.395 62.491 86.443 62.491s86.443-26.859 86.443-62.491v-.134c-.071 28.783-45.325 51.018-86.443 51.018z"
                    fill="#FEDC90"
                  ></path>
                  <path
                    class="eye"
                    d="M74.85 117.896c0 9.718-4.546 14.779-10.154 14.779s-10.154-5.061-10.154-14.779 4.546-14.779 10.154-14.779 10.154 5.061 10.154 14.779zM140.851 117.896c0 9.718-4.546 14.779-10.154 14.779s-10.154-5.061-10.154-14.779 4.546-14.779 10.154-14.779 10.154 5.061 10.154 14.779z"
                    fill="#633001"
                  ></path>
                </svg>
              </Link>

              {(slide || screen > 767) && (
                <div className="nav-links">
                  <Link to="/card">Farm</Link>
                  <Link to="/win">Win</Link>
                  <Link to="/trade">Trade</Link>
                </div>
              )}
            </div>
            <div className="btn-nav">
              <div>
                <svg
                  viewBox="0 0 96 96"
                  width="24px"
                  color="text"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-5a69fd5e-0 fNCrIk"
                >
                  <circle
                    cx="48"
                    cy="48"
                    r="48"
                    fill="url(#paint0_linear_10493)"
                  ></circle>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z"
                    fill="#633001"
                  ></path>
                  <path
                    d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z"
                    fill="#D1884F"
                  ></path>
                  <path
                    d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z"
                    fill="#FEDC90"
                  ></path>
                  <path
                    d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z"
                    fill="#633001"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_10493"
                      x1="48"
                      y1="0"
                      x2="48"
                      y2="96"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#53DEE9"></stop>
                      <stop offset="1" stop-color="#1FC7D4"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <p>$6.66</p>
              </div>
              <div>
                <svg
                  viewBox="0 0 24 24"
                  color="textSubtle"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-5a69fd5e-0 jFqdzh"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"></path>
                </svg>
              </div>
              <div>
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  color="textSubtle"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-5a69fd5e-0 jNuCsa"
                >
                  <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"></path>
                </svg>
              </div>
              <button>Connect wallet</button>
            </div>

            <div className="lines" onClick={navOpen}>
              <div className="line1"> </div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
