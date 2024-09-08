const Cards = ({ data }) => {
  // console.log(data);
  
  const { jobTitle, jobLocation, experienceLevel, salary, employmentType } = data;

  return (
    <div>{jobTitle}</div>
  );
};

export default Cards;
