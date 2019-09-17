import React from "react";

class Form extends React.Component {
    render() {
        return(
            <form>
                <input type="text" name="City" placeholder="City..." />
                <input type="text" name="Country" placeholder="Country..." />
            </form>
        );
    }
}


export default Form;