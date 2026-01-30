// Preventions.js
import React from "react";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Prevention.css";

const preventionsData = [
  {
    title: "Lung Cancer",
    image: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/4375-lung-cancer",
    description: "Lung cancer is one of the most common cancers worldwide. Early detection is critical for effective treatment. Smoking is the leading cause, but non-smokers are also at risk due to air pollution and genetics.",
    link: "https://www.cancer.org/cancer/lung-cancer.html",
  },
  {
    title: "Breast Cancer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS6imxBG359nFYGI6glza_Jv4xysih95r95w&s",
    description: "Breast cancer is the most diagnosed cancer among women. Regular screening can save lives. Early detection through mammograms and self-exams can significantly improve survival rates.",
    link: "https://www.cancer.org/cancer/breast-cancer.html",
  },
  {
    title: "Skin Cancer",
    image: "https://www.cdc.gov/skin-cancer/media/images/skin-illustration-16x9-1.jpg",
    description: "Skin cancer is preventable by minimizing exposure to UV rays. Learn how to protect yourself. Use sunscreen, wear protective clothing, and avoid tanning beds to reduce your risk.",
    link: "https://www.cancer.org/cancer/skin-cancer.html",
  },
  {
    title: "Blood Cancer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRRiMsqvYVdHQlIAk1wOXw61guuRamUWrJ-h0omBFLZBOzNEC3NkJ_XWMktCMk5eHP90&usqp=CAU",
    description: "Blood cancer affects the production and function of blood cells. Early diagnosis improves treatment outcomes. Understanding the symptoms like fatigue, fever, and bruising is key to early intervention.",
    link: "https://www.cancer.org/cancer/blood-cancer.html",
  },
  {
    title: "Prostate Cancer",
    image: "https://dreminozbek.com/wp-content/uploads/2023/04/Prostat-Kanseri-Ameliyati-1024x725.png",
    description: "Prostate cancer is common in men. Early detection can ensure effective treatment. Routine PSA blood tests and awareness of symptoms like urination issues are crucial.",
    link: "https://www.cancer.org/cancer/prostate-cancer.html",
  },
  {
    title: "Colon Cancer",
    image: "https://i0.wp.com/news.med.miami.edu/wp-content/uploads/2024/06/img-colorectal-cancer-illustration.jpg?fit=1100%2C619&ssl=1",
    description: "Colon cancer often develops from polyps. Screening is crucial for early detection. A healthy diet, regular exercise, and reducing red meat intake can lower risks.",
    link: "https://www.cancer.org/cancer/colon-rectal-cancer.html",
  },
  {
    title: "Ovarian Cancer",
    image: "https://media.istockphoto.com/id/1003427466/photo/3d-illustration-of-ovarian-cancer.jpg?s=612x612&w=0&k=20&c=jiK-VLTd9tVsyxIuxbBSQem3jcA-n4OZ7UVpOvzI_dI=",
    description: "Ovarian cancer is known as a silent killer due to its subtle symptoms. Early diagnosis is key. Genetic testing and awareness of family history can help assess risks.",
    link: "https://www.cancer.org/cancer/ovarian-cancer.html",
  },
  {
    title: "Cervical Cancer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4bVtiTYxZzlTeO75bc0ntlYnso8ZX_KriB93mvcqU47vu5fXAavzGcyNBbQYWbHtylQ&usqp=CAU",
    description: "Cervical cancer can be prevented with regular Pap smears and the HPV vaccine. Understanding the link between HPV and cervical cancer highlights the importance of vaccination.",
    link: "https://www.cancer.org/cancer/cervical-cancer.html",
  },
  {
    title: "Kidney Cancer",
    image: "https://media.istockphoto.com/id/518225933/photo/kidney-cancer.jpg?s=612x612&w=0&k=20&c=nu--0W2wskhV3Fk48bKphrbqeHjUu_4b5_TF20hGe3A=",
    description: "Kidney cancer symptoms include blood in the urine and persistent back pain. Early diagnosis is vital. Regular checkups can help detect kidney issues before they worsen.",
    link: "https://www.cancer.org/cancer/kidney-cancer.html",
  },
  {
    title: "Pancreatic Cancer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-v0ZjF9Mbd03nah9-1xjVRF5h9rTYeNZLA&s",
    description: "Pancreatic cancer often has few early symptoms. Research is advancing in detection and treatment. Maintaining a healthy lifestyle and understanding risk factors is essential.",
    link: "https://www.cancer.org/cancer/pancreatic-cancer.html",
  },
  {
    title: "Liver Cancer",
    image: "https://www.indushealthplus.com/front/media/article_img/liver-cancer-thumb.jpg",
    description: "Liver cancer is often linked to hepatitis and alcohol use. Early treatment is critical. Regular screenings and vaccinations against hepatitis B can prevent liver cancer.",
    link: "https://www.cancer.org/cancer/liver-cancer.html",
  },
  {
    title: "Esophageal Cancer",
    image: "https://www.genengnews.com/wp-content/uploads/backup_images/placeholder_Cancer.jpg",
    description: "Esophageal cancer affects the tube that connects your throat and stomach. Avoiding tobacco can reduce risk. Chronic acid reflux and obesity are significant risk factors.",
    link: "https://www.cancer.org/cancer/esophageal-cancer.html",
  },
  {
    title: "Stomach Cancer",
    image: "https://media.istockphoto.com/id/1168181201/photo/body-with-stomach-tumor.jpg?s=612x612&w=0&k=20&c=uUtgbYcWvkeZhbcAKE0AoJYaqicX1fqh3tyDk84jF4w=",
    description: "Stomach cancer symptoms can include indigestion and stomach pain. Early detection improves outcomes. Diets rich in vegetables and low in processed foods can help lower risks.",
    link: "https://www.cancer.org/cancer/stomach-cancer.html",
  },
  {
    title: "Bladder Cancer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOCv3ZCE99yoAunJBQ6sY8Z_5TaF-6EUWwg&s",
    description: "Bladder cancer often presents with blood in the urine. Early detection is essential. Quitting smoking and reducing exposure to harmful chemicals can lower your risk.",
    link: "https://www.cancer.org/cancer/bladder-cancer.html",
  },
  {
    title: "Brain Cancer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtTC6BynwIhx2djR7iAJ81WcY2LQL_Tis2A&s",
    description: "Brain cancer can affect critical functions depending on the tumor's location. Research is ongoing. Treatment options include surgery, radiation, and targeted therapies.",
    link: "https://www.cancer.org/cancer/brain-spinal-cord-tumors-adults.html",
  },
  {
    title: "Thyroid Cancer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSl_SBMu77DdIXjzCJ9J3w0jHytIbrWUt_IA&s",
    description: "Thyroid cancer has a high survival rate if detected early. Ultrasound and biopsies aid in detection. Awareness of neck swelling and voice changes is important.",
    link: "https://www.cancer.org/cancer/thyroid-cancer.html",
  },
  {
    title: "Testicular Cancer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGzGgoPZaOg-P3gx3mvVgfnR_ZqWktlM93A&s",
    description: "Testicular cancer commonly affects younger men. Regular self-exams can aid in early detection. Prompt treatment ensures high recovery rates in most cases.",
    link: "https://www.cancer.org/cancer/testicular-cancer.html",
  },
  {
    title: "Oral Cancer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU064BQYBpBO2Vk57jDl5-WPCxp-6sM_3JIA&s",
    description: "Oral cancer can be prevented by avoiding tobacco and alcohol. Regular dental checkups are important. Early signs include sores and lumps in the mouth.",
    link: "https://www.cancer.org/cancer/oral-cavity-and-oropharyngeal-cancer.html",
  },
  {
    title: "Gallbladder Cancer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gHfCkkdZ1OUKKS1NhZhmdMXuClehCnPqqg&s",
    description: "Gallbladder cancer often has vague symptoms, leading to late diagnosis. Regular monitoring of gallbladder health can help. Obesity and gallstones are risk factors.",
    link: "https://www.cancer.org/cancer/gallbladder-cancer.html",
  },
  {
    title: "Bone Cancer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbAERiP7sjrKWdFUNM7jebp7rk0y_WnsrDA&s",
    description: "Bone cancer can occur in any bone, commonly affecting long bones. Pain and swelling are early symptoms. Advancements in treatment include chemotherapy and limb-sparing surgery.",
    link: "https://www.cancer.org/cancer/bone-cancer.html",
  },
];

function Prevention() {
  const navigate = useNavigate();

  return (
    <div className="preventions-container">
      {/* Back arrow at the top left */}
      <div className="back-arrow" onClick={() => navigate("/home")}>
      <i className="fas fa-arrow-left"></i>
      </div>
      <h2 className="preventions-heading">Prevent Cancer with Knowledge</h2>
      <div className="cards-container-prev">
        {preventionsData.map((prevention, index) => (
          <div className="card-prevention" key={index}>
            <img src={prevention.image} alt={prevention.title} className="card-image-prev" />
            <h3 className="card-title-prev">{prevention.title}</h3>
            <p className="card-description-prev">{prevention.description}</p>
            <a
              href={prevention.link}
              target="_blank"
              rel="noopener noreferrer"
              className="learn-more-btn"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prevention;
