import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="body-main">
            <div className="navigation">
                <nav>
                    <div className="left-navigation">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBc01kPmgxpQwhWfr2wqmJkDUPe3TSNI97xg&s"
                            alt="Health awareness website logo"
                        />
                    </div>

                    <div className="right-navigation">
                        <div className="hamburger-menu" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} size="lg" color="white" style={{ marginRight: "30px" }} />
                        </div>

                        <div className={`mid-navigation ${menuOpen ? "active" : ""}`}>
                            <Link to="/preventions" onClick={closeMenu}>Preventions</Link>
                            <Link to="/checkpage" onClick={closeMenu}>CheckNow</Link>
                            <Link to="/about" onClick={closeMenu}>AboutUs</Link>
                            <Link to="/contact" onClick={closeMenu}>Contact</Link>
                        </div>

                        <div className="profile-wrapper">
                            <Link to="/profile">
                                <FontAwesomeIcon icon={faUserCircle} size="2x" color="white" />
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="home-body">
                <div className="left-body">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBc01kPmgxpQwhWfr2wqmJkDUPe3TSNI97xg&s"
                        alt="Cancer health monitoring logo"
                    />
                    <h1>Check Your <br /> Health Today</h1>
                    <p>Early Detection is the Key to a Cancer-Free Tomorrow!</p>
                    <div className="btn">
                        <Link to="/checkpage">Check Now</Link>
                    </div>
                </div>

                <div className="right-body">
                    {/* Marquee 1 */}
                    <div className="marquee1">
                        <div className="img-con"><img src="https://www.availhospitals.com/wp-content/uploads/2022/08/Blood-cancer.jpg" alt="Blood cancer medical illustration" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGifGLbe8yTpHQhcOQeFTVVMpm_3EfS36bhw&s" alt="Cancer cell microscopic view" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhgk-hQL0M82o4f-7NZqWlX48l8JqVxLfryXBGLZT9GqHlMuqOzW7XmZaTRkxCBoUM74&usqp=CAU" alt="Oncology medical research" /></div>
                        <div className="img-con"><img src="https://www.indushealthplus.com/media/article_img/blood-cancer-thumb.jpg" alt="Blood cancer diagnosis representation" /></div>
                        <div className="img-con"><img src="https://d35oenyzp35321.cloudfront.net/MHC_Digital_Treatments_Available_For_Blood_Cancer_Part_13_925x389pix_150322n_01_dc4d07f20e.jpg" alt="Blood cancer treatment awareness banner" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjV2qte9DtudiIrqefq6DOI4C1xQEOHDd9IaQUqp4Sl8U4VAfrOYNVN7JFilcNyhlXqE&usqp=CAU" alt="Cancer prevention healthcare visual" /></div>
                        <div className="img-con"><img src="https://healthtree.org/images-resize?width=970&height=545&imageUrl=https%253A%252F%252Ffirebasestorage.googleapis.com%252Fv0%252Fb%252Fhealthtree-production.appspot.com%252Fo%252Fgallery%25252Fpublic%25252Fmultiple%252520myeloma_7517bec3-8705-4ece-a8c9-b746fad2bb67.jpg%253Falt%253Dmedia" alt="Multiple myeloma cancer illustration" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKewUY1ZgFamt0yFDJ5Yljxw-UVhn5NWui0g&s" alt="Cancer awareness medical banner" /></div>
                        <div className="img-con"><img src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2019/08/Carcinoma-cell-in-situ-header-1024x575.jpg?w=1155&h=1528" alt="Carcinoma cell illustration" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWbeAPQRUDi6U_7CNpuKxzfCHkqb6cIRmzQ&s" alt="Cancer diagnosis medical imaging" /></div>
                    </div>

                    {/* Marquee 2 */}
                    <div className="marquee2">
                        <div className="img-con"><img src="https://www.availhospitals.com/wp-content/uploads/2022/08/Blood-cancer.jpg" alt="Blood cancer awareness visual" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrlZoWJaalT7OGHA4sHTM_mJVKoCAejCmYg&s" alt="Cancer laboratory research" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9w1w-cvy9EdX2k9TAbazE-rxl3EjD0ro02cmzq2v0UYdk-OxMYWxV8eUf1OVTM6d7P4&usqp=CAU" alt="Medical cancer diagnosis scan" /></div>
                        <div className="img-con"><img src="https://cdn8899.templcdn.com/wp-content/uploads/2024/07/lever.jpg" alt="Liver cancer medical illustration" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMhuUvNKAXpOhgo1zFxvwPMcHM9srbmwlw8_cODvIl6S33NZmE5pcpczQcsZUClWWt-k&usqp=CAU" alt="Cancer treatment medical equipment" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrT7IPk9uKHmuSJTJEIoeO8U8hOKuOxyW4MHxHvejA0KouJgMnYb6rn_vbz0MsUCJl1Q&usqp=CAU" alt="Tumor cell medical illustration" /></div>
                        <div className="img-con"><img src="https://cdn.mos.cms.futurecdn.net/XW4AHryPDikLoEdT8ahRCj.jpg" alt="Cancer detection lab analysis" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-S2ciK1LggJtbAkxgrSaP7FQ1WbKHEflRG5KvgiJ9vhykGv-2DJ52XVClCch2L8hp24&usqp=CAUA" alt="Oncology medical research banner" /></div>
                        <div className="img-con"><img src="https://www.telegraph.co.uk/content/dam/global-health/2024/04/24/TELEMMGLPICT000363881506_17139593800690_trans_NvBQzQNjv4BqNJjoeBT78QIaYdkJdEY4CnGTJFJS74MYhNY6w3GNbO8.jpeg?imwidth=680" alt="Cancer awareness campaign" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzxb-FzJTStIrrd18BY4HyDabXLL2Fh_wEw&s" alt="Medical oncology healthcare illustration" /></div>
                    </div>

                    {/* Marquee 3 */}
                    <div className="marquee3">
                        <div className="img-con"><img src="https://www.availhospitals.com/wp-content/uploads/2022/08/Blood-cancer.jpg" alt="Blood cancer prevention visual" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbzZRWuzory5Ku2cBYKvJU2wi426Ty8-XUMlvkDsn5IqodRfxXpRQItWWUWuNtq0DpEg&usqp=CAU" alt="Cancer awareness educational" /></div>
                        <div className="img-con"><img src="https://www.omegahospitals.com/blog/storage/2024/05/c-users-home-downloads-photo-medical-banner-with--1024x1024.jpeg" alt="Medical cancer awareness banner" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhi5_JQMdjBUVWuIvlH4vsV7m4Gloaaw3KlA&s" alt="Cancer screening medical illustration" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYyBZoE0JpqcCVSz4Pqg6zVXR3H18KZT57g&s" alt="Tumor detection healthcare" /></div>
                        <div className="img-con"><img src="https://d3rmrttq0bsnxi.cloudfront.net/Pictures/480xany/8/0/0/6800_lowres_hpvinfectionsbanner_363611_crop.jpg" alt="HPV infection cancer awareness banner" /></div>
                        <div className="img-con"><img src="https://st2.depositphotos.com/3942035/5658/i/450/depositphotos_56589559-stock-photo-fantasy-cancerous-metastasis-medical-illustration.jpg" alt="Cancer metastasis medical illustration" /></div>
                        <div className="img-con"><img src="https://www.logintohealth.com/blog/wp-content/uploads/2021/10/Multiple-Myeloma-Treatment-1-e1635149319230.jpg" alt="Multiple myeloma treatment banner" /></div>
                        <div className="img-con"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLWLngM2pDmDJ_I5tkk80lbrnBmo87bt9Kk1i5dTS5ecyMPKyetJdx9BVtBsc1nmNdqw&usqp=CAU" alt="Cancer medical imaging scan" /></div>
                        <div className="img-con"><img src="https://www.clevelandclinicabudhabi.ae/cancercenter/-/media/images/oncology/about-img/brain-and-spinal-cord-tumors-program.jpg?h=1100&w=1260&la=en&hash=71773579BD50F59B9A9909834282ACD7" alt="Brain and spinal tumor medical illustration" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
