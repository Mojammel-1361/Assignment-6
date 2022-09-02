const loadAllCategory = async()=>{
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    return data;
}
const loadAllMaun = async() =>{
   const data = await loadAllCategory();
   const listMaun = data.data.news_category;

   const menu = document.getElementById('all-menu');
   for(const list of listMaun){
    
    const li = document.createElement("li");
    li.innerHTML = `<button onclick="catagories('${list.category_id}')">${list.category_name}</button>
    `;
    menu.appendChild(li);
    
   }
}
loadAllMaun();

// maun part end 

const catagories = (aID) =>{
    console.log('aID');
}
