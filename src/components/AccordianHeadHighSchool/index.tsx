import * as React from "react";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";
import { Text } from "..";
import { Link } from "react-router-dom";

const AccordiaHeadHighSchool = () => {
  return (
    <div className="flex justify-center">
      <Accordion
        className="flex flex-col justify-center items-center"
        style={{
          boxShadow: "none",
          backgroundColor: "inherit",
          width: "fit-content",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Text
            as="p"
            className="!text-gray-900 text-right !font-medium cursor-pointer"
          >
            <Link to="/noaccess">For High School</Link>
          </Text>
        </AccordionSummary>
        <AccordionDetails className="">Option1</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordiaHeadHighSchool;
