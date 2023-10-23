import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { AccordionGroup } from '@mui/joy';
import parse from 'html-react-parser';
import Image from 'next/image';
import arrDown from './svg/arrowDown.svg?url'

function Arrow(){
  return <Image src={arrDown} alt='arrow' />
}

export default function BasicAccordion({data, index, setIndex}) {


  const accordionStyle = {
    backgroundColor: '#111827',
    borderBottomWidth: 1,
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    boxShadow:'0px',
    padding:'0px',
  };
  const summaryStyle = {
    padding:'0px',
    paddingBottom:'0px',
    justifyContent:'space-between',
    alignItems:"baseline",
    minHeight:0,
  };
  const detailStyle = {
    padding:0,
    marginTop:0,
    marginBottom:0,

  };
  return (
    <div>
      <AccordionGroup className=' max-w-xl'>
        {data.map((item, i)=>(
          <div key={i}>
          <Accordion
          expanded={index === i}
          onChange={(event, expanded) => {
            setIndex(expanded ? i : index);
          }}
           style={accordionStyle}
           key={i}>
            <AccordionSummary
            style={summaryStyle}
                expandIcon={<Arrow />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ><h1 className={`text-2xl font-arboriaMedium leading-32 text-white   ${i==0 ? ' pt-0 ': ' pt-10 ' } ${index==i || i==0 ? ' pb-6': ' pb-8 ' }`}>{item.title}</h1>
              </AccordionSummary>
              <AccordionDetails
              style={detailStyle}
              >
              {parse(item.description, {
                        replace: (domNode) => {
                          if (domNode.type === 'text')
                          {
                            return <span className='text-lg font-arboriaBook leading-26 pb-8 text-white inline-block' key={domNode.data}> {domNode.data} </span>       
                          }
                        },  
                    })}
              </AccordionDetails>
          
        </Accordion>
        </div>       
          ))}
      </AccordionGroup>
      
    </div>
  );
}