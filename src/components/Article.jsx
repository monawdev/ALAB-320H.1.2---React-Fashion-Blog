import image1 from "../assets/blog-image-1.jpg";
import image2 from "../assets/blog-image-2.jpg";

function Article({ date, title, image }) {
  return (
    <article>
      <p className="date">{date}</p>

      <h2>{title}</h2>

      <img src={image} alt={title} />

      <p>
        Cray ipsum, dolor sit amet consectetur adipisicing elit.
        Repellat quidem deserunt nemo dignissimos fuga veniam
        inventore eligendi magnam aperiam odit mollitia cupiditate
        eveniet velit officiis magni aliquid, laborum dolor?
        Quasi! Veniam amet rerum ducimus est ea at neque alias.
        Temporibus perspiciatis at impedit voluptas aut voluptates
        facere totam aliquid debitis rerum, ex consequuntur, nulla
        eius quae corrupti optio atque ut. Repellendus molestiae
        doloribus recusandae, itaque voluptatibus placeat repellat
        deserunt amet eaque dignissimos.
      </p>

      <a href="#" className="continue">
        Continues ...
      </a>
    </article>
  );
}

export default Article;