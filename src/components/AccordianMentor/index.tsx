// import React from "react";
// import { Accordion } from "@material-tailwind/react";
// import { AccordionBody } from "@material-tailwind/react";
// import { AccordionHeader } from "@material-tailwind/react";

// function Icon({ id, open }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={2}
//       stroke="currentColor"
//       className={`${
//         id === open ? "rotate-180" : ""
//       } h-5 w-5 transition-transform`}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//       />
//     </svg>
//   );
// }

// interface Props {
//   kristinwatson?: string;
//   foundermentor?: string;
// }

// export function AccordionCustomIcon(props: Props) {
//   const { kristinwatson, foundermentor } = props;
//   const [open, setOpen] = React.useState(0);

//   const handleOpen = (value) => setOpen(open === value ? 0 : value);

//   // open: open;
//   // icon?: icon;
//   // animate?: animate;
//   // disabled?: disabled;
//   // className?: className;
//   // children: children;

//   return (
//     <>
//       <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(1)}>
//           <div className="flex flex-col items-start justify-start w-[84%] pt-[5px] gap-[13px]">
//             <Text as="p" className="!text-black-900_02 !font-medium">
//               {kristinwatson}
//             </Text>
//             <Text size="s" as="p">
//               {foundermentor}
//             </Text>
//           </div>
//         </AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at.
//           We&apos;re constantly growing. We&apos;re constantly making mistakes.
//           We&apos;re constantly trying to express ourselves and actualize our
//           dreams.
//         </AccordionBody>
//       </Accordion>
//     </>
//   );
// }

import * as React from "react";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";
import { Text } from "./..";

interface Props {
  kristinwatson?: string;
  foundermentor?: string;
}

export default function AccordionMentor({
  kristinwatson,
  foundermentor,
}: Props) {
  return (
    <div className="flex justify-center">
      <Accordion
        className="flex flex-col justify-center w-full sm:w-full"
        style={{ boxShadow: "none", backgroundColor: "inherit" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="flex flex-col items-start justify-start w-[84%] pt-[5px] gap-[13px]">
            <Text as="p" className="!text-black-900_02 !font-medium">
              {kristinwatson}
            </Text>
            <Text size="s" as="p">
              {foundermentor}
            </Text>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
