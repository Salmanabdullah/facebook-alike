import React from "react";
import "./nav-bar.css";

function Topbar() {
  return (
    <section className="top-bar d-flex justify-content-between">
      <article className="left-icons d-flex justify-content-start gap-3 ms-0">
        <span>logo</span>
        <div>search</div>
      </article>
      <article className="mid-icons d-flex justify-content-center gap-3">
        {/* <tr>
          <td>home</td>
          <td>homeless</td>
          <td>home</td>
          <td>home</td>
        </tr> */}
        <div>home</div>
        <div>watch</div>
        <div>marketplace</div>
        <div>groups</div>
        <div>gaming</div>
      </article>
      
      <article className="right-icons d-flex justify-content-end gap-3 me-0">
        <div>profile</div>
        <div>menu</div>
        <div>messenger</div>
        <div>notifications</div>
        <div>account</div>
      </article>
    </section>
  );
}

export default Topbar;
