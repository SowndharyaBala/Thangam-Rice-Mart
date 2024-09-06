
import React from 'react';
import RiceItem from '../RiceItem/RiceItem'; // Keep this as it is



const riceVarieties = [
    { id: 1, name: 'Basmati Rice', description: 'Long, slender-grained aromatic rice.' ,image:'https://th.bing.com/th/id/OIP.1YAg_Jh-sJ3ALdM4J78j2wHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 2, name: 'Sona Masoori', description: 'Medium-grain rice, lightweight and aromatic.' ,image:'https://th.bing.com/th/id/OIP.ACH9nAzj-DevfL_Q5nvJHAHaLI?w=126&h=190&c=7&r=0&o=5&pid=1.7'},
    { id: 3, name: 'Ponni Rice', description: 'Highly preferred in South India for its fragrance and taste.' ,image:'https://th.bing.com/th/id/OIP.MSVvPpEls2jQjh8G12dQQQHaHZ?w=192&h=191&c=7&r=0&o=5&pid=1.7'},
    { id: 4, name: 'Brown Rice', description: 'Whole grain rice with the bran intact.',image:'https://th.bing.com/th/id/OIP.3z1_9Zt_w0YkoEVzBhyy9wHaFj?w=215&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 5, name: 'Red Rice', description: 'Nutty flavor and high nutritional value.', image: 'https://www.bing.com/th?id=OIP.-WN_w1U0UxsiCfv0BCMXQwHaHa&w=146&h=146&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'},
    { id: 6, name: 'Raw Rice (Pacharisi)', description: 'A type of raw rice used for making idli, dosa, and various South Indian delicacies, known for its soft texture and mild flavor.' ,image:'https://dharaninaturals.in/wp-content/uploads/2021/10/top-view-raw-rice-inside-plate-dark-desk-2.jpg' },
    { id: 7, name: 'Parboiled rice (Pulungalarisi)', description: 'Also known as parboiled rice, it is partially boiled in the husk, making it more nutritious and giving it a unique texture and flavor.' ,image:'https://th.bing.com/th/id/OIP.D9O1BU8kNfHBzpRl-CWT8AHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7'},
    { id: 8, name: 'Seeraga Samba', description: 'A fragrant rice variety known for its small grain size and unique aroma, often used in South Indian biryanis and special dishes.',image:'https://th.bing.com/th/id/OIP.qUo9NEIDdRkhB0uEeZIcKQHaHa?rs=1&pid=ImgDetMain' },
    { id: 9, name: 'Broken Rice (Noi Arisi)', description: 'A traditional South Indian rice variety, Noi Arisi is a broken rice used primarily for making kanji, a comforting porridge that is easy to digest and highly nutritious.',image:'https://everydaynourishingfoods.com/wp-content/uploads/2021/09/instant-pot-basmati-rice-steps-5-640x853.jpeg'}
    
  ];
  


function RiceList() {
  return (
    <div className="rice-list">
      {riceVarieties.map((rice) => (
        <RiceItem key={rice.id} name={rice.name} description={rice.description} image={rice.image}/>
    
      ))}
    </div>
  );
}

export default RiceList;
