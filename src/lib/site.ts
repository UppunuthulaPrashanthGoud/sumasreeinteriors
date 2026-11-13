export const site = {
 name:"Suma Sri Interiors & Constructions", shortName:"Suma Sri",
 url:process.env.NEXT_PUBLIC_SITE_URL || "https://sumasriinteriors.vercel.app",
 description:"Interior design, modular kitchens, home construction and renovation in Hanamakonda, Warangal. Serving Telangana and Andhra Pradesh.",
 address:"Hanamakonda, Warangal, Telangana - 506001", region:"Telangana & Andhra Pradesh",
 whatsapp:process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919133509293"
};
export const services = [
 {number:"01",title:"Interior Design",slug:"interior-design",text:"Thoughtful interiors shaped around your lifestyle, taste and everyday rituals.",image:"photo-1600210492486-724fe5c67fb0",details:"Plan and style rooms with considered layouts, finishes, lighting, storage and furniture details."},
 {number:"02",title:"Modular Kitchen",slug:"modular-kitchen",text:"Practical kitchen layouts, cabinetry and storage with refined finishes.",image:"photo-1600607687939-ce8a6c25118c",details:"Create a kitchen around the way you cook and use your home, with thoughtful work zones, storage and finish selection."},
 {number:"03",title:"Home Construction",slug:"house-construction",text:"From 2D and 3D home plans to elevation concepts, structural drawings and civil works.",image:"photo-1600585154340-be6161a56a0c",details:"Construction services include 2D and 3D home plans, 2D and 3D elevation designs, structural drawings, civil works and painting."},
 {number:"04",title:"Home Renovation",slug:"house-renovation",text:"Transform existing spaces with coordinated renovation and finishing work.",image:"photo-1600607687920-4e2a09cf159d",details:"Renovation can include demolition, restructured walls, plumbing, electrical work and painting, based on site condition and agreed scope."},
 {number:"05",title:"Living Room Interiors",slug:"living-room-interiors",text:"Welcoming living spaces with custom TV units, wall panelling, arches and partitions.",image:"photo-1600607687644-c7171b42498f",details:"Explore hall arches, partitions, TV units, wall panelling and coordinated finishes for your living spaces."},
 {number:"06",title:"Bedroom Interiors",slug:"bedroom-interiors",text:"Comfortable bedrooms with considered storage, wardrobes and finishes.",image:"photo-1616486338812-3dadae4b4ace",details:"Bedroom work includes wardrobes and coordinated storage, finishes and interior details."},
 {number:"07",title:"Pooja Room Design",slug:"pooja-room-design",text:"Serene pooja mandirs and devotional panels with meaningful detailing.",image:"photo-1600210491369-e753d80a41f3",details:"Create a devotional focal point with pooja mandirs, backlit panels and considered material choices."},
 {number:"08",title:"Commercial Interiors",slug:"commercial-interiors",text:"Functional, welcoming spaces for work and customer-facing environments.",image:"photo-1497366754035-f200968a6e72",details:"Discuss your commercial space requirements, functional priorities, layout and finish preferences with the team."}
];
export const projects = [
 {title:"Hanamakonda Family Home",location:"Hanamakonda, Warangal",category:"Residential interiors",image:"photo-1600607687939-ce8a6c25118c",detail:"The described project features a wood-carved hall arch, modular kitchen, backlit pooja panel, TV unit and wall panelling, bedroom wardrobe and wash counter.",verified:true},
 {title:"Warm Minimal Living",location:"Design reference",category:"Living spaces",image:"photo-1600210492486-724fe5c67fb0",detail:"Illustrative design direction featuring a calm palette, layered lighting and tactile finishes.",verified:false},
 {title:"Contemporary Kitchen",location:"Design reference",category:"Modular kitchen",image:"photo-1600607687920-4e2a09cf159d",detail:"Illustrative kitchen design reference with streamlined cabinetry and practical work zones.",verified:false}
];
export const imageUrl=(id:string,width=1400)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;