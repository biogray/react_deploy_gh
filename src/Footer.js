
const Footer = ({list}) => {
  const today = new Date();    
  return (
    <footer>
       <p>Copyright &copy; {today.getFullYear()} </p>
       
       <p>{list} List {list==0 ? "Empty" : list==1 ? "Item" : "Items" }.</p>
    </footer>
  )
}

export default Footer;

