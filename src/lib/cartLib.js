import $ from 'jquery';

export const countCart = cart => {
    //console.log("cartLib", cart);

    let cartItemCount = cart.length;
      //console.log("cartItemCount", cartItemCount);
 
 
      return { cartItemCount, cart }
}

export const highLightCartButton = () => {
  $("html, body").animate({ scrollTop: 0 }, 300);
  $("#nav-view-cart-link").addClass('active');
  setTimeout(() => $("#nav-view-cart-link").removeClass('active'), 700);
} 