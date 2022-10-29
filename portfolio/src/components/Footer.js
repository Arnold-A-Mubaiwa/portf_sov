import React from "react";

function Footer() {
  const year = new Date();
  return (
    <div className="page-footer bg-primary font-small special-color-dark text-light pt-4">
        <div className="row pt-4">
      <blockquote>
        Copyright {"  "}
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
        {year.getFullYear()}{" "}
      </blockquote>
        </div>
     

    </div>
  );
}

export default Footer;
