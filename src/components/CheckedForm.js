import React, { useState } from "react";
 function CheckedForm () {

    const [newsletter, setNewsLetter]  = useState(false);

    function handleNewsletterChange (event) {
        setNewsLetter (event.target.checked)
    }

    return  (
        <form>
          <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
          <input
            type="checkbox"
            id="newsletter"
            onChange={handleNewsletterChange}
           
            checked={newsletter}
          />
          <button type="submit">Submit</button>
        </form>
      );
 }

 export default CheckedForm;