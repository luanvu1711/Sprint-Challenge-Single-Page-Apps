import React, { useState } from "react";
import {Field, Form, withFormik} from 'formik';

const SearchForm = props => {
  return (
    <input onChange={props.handleInput} type="text" placeholder="Who are you looking for?"/>
  );
}

export default SearchForm;