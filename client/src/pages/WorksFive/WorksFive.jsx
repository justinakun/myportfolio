import "./WorksFive.scss";

const WorksFour = () => {
  return (
    <div className="works-five-container">
      <h1 className="works-five-title">E-commerce</h1>
      <div className="works-five-description">
        This is my first venture into e-commerce, built using the MERN stack. It&apos;s a full-stack application that brings together both Front-End and Back-End development. Dive in to explore the features of this dynamic shopping platform, and check out the code {" "}
        <a
          className="github-link"
          href="https://github.com/justinakun/eshop"
          title="Go to GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </div>
      <div className="works-five-comment">
        This is the front page of the app. It includes a navigation bar, footer, and several other sections/components. Items under &quot;Popular in Women&apos;s&quot; and &quot;New Collections&quot; are retrieved from the database.
      </div>
      <div className="works-five-image">
        <img src="/eshop_front.png" alt="eshopfront" />
      </div>
      <div className="works-five-comment">
        The consumer can either create an account or log in after clicking the login button.
      </div>
      <div className="works-five-image">
        <img src="/eshop_login.png" alt="eshoplogin" />
      </div>
      <div className="works-five-comment">
        The navigation bar helps consumers browse through different clothing categories. When the &quot;Women&quot; category is clicked, it displays women&apos;s clothing items retrieved from the database.        
      </div>
      <div className="works-five-image">
        <img src="/eshop_category.png" alt="eshopcategory" />
      </div>
      <div className="works-five-comment">
        When the consumer clicks on one of the photos, they are taken to the product page where they can add the item to the cart.        
      </div>
      <div className="works-five-image">
        <img src="/eshop_product.png" alt="eshopproduct" />
      </div>
      <div className="works-five-comment">
        After adding one or more items to the shopping cart, the consumer can go to the cart to see all the items and the total cost. If the consumer doesn&apos;t make a purchase immediately and wants to return later, their cart is saved in the database. Additionally, they can remove items from the cart at any time.       
      </div>
      <div className="works-five-image">
        <img src="/eshop_cart.png" alt="eshopcart" />
      </div>
      <div className="works-five-comment">
        The application also includes an admin interface that allows the administrator to add new items, see the full list of items, and remove any item. All changes are stored in the database.  
      </div>
      <div className="works-five-image">
        <img src="/eshop_admin_add.png" alt="eshopadminadd" />
      </div>
      <div className="works-five-image">
        <img src="/eshop_admin_list.png" alt="eshopadminlist" />
      </div>
      <div className="works-five-comment short-comment">
        The application is fully responsive.        
      </div>
      <div className="works-five-image">
        <img src="/eshop_mobile.png" alt="eshopmobile" />
      </div>



    </div>
  );
};

export default WorksFour;
