import bcrypt from "bcryptjs"

const data = {

    users: [
        {
            name: "Sigutė Sagutė (Admin)",
            email: "sigute@ukis.lt",
            password: bcrypt.hashSync("sigute"),
            address: "Lauku g., 1, Laukuva",
            phone: "+37061161611",
            image: "./assets/images/sellers/person1.png",
            isAdmin: true
        },
        {
            name: "Kotryna Kartutė",
            email: "kotryna@ukis.lt",
            password: bcrypt.hashSync("kotryna"),
            address: "Pievu g., 1, Laukuva",
            phone: "+37062262622",
            image: "./assets/images/sellers/person2.png",
            isAdmin: false
        },
        {
            name: "Zigmas Žiogas",
            email: "zigmas@ukis.lt",
            password: bcrypt.hashSync("zigmas"),
            address: "Tvartu g., 1, Laukuva",
            phone: "+37063336336",
            image: "./assets/images/sellers/person4.png",
            isAdmin: false
        },
        {
            name: "Benas Penas",
            email: "benas@ukis.lt",
            password: bcrypt.hashSync("benas"),
            address: "Kelio g., 1, Laukuva",
            phone: "+37064446446",
            image: "./assets/images/sellers/person3.png",
            isAdmin: false
        }

    ],

    category: [
        {
            name: "Fruits"
        },
        {
            name: "Vegetables"
        }
    ],

    products: [
        {
            name: "Apple",
            slug: "apple", 
            category: "Fruits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat delectus cumque vitae aliquid expedita reiciendis? Amet nesciunt autem veritatis quibusdam repudiandae nemo veniam modi nulla omnis, voluptatem aspernatur non! Ratione fugit tempora excepturi asperiores atque distinctio pariatur animi minima vel totam dolor ducimus blanditiis omnis, ut quam accusantium aspernatur consectetur temporibus dolores unde, harum corrupti amet necessitatibus officia. Officiis.",
            price: "0.49",
            image: "./assets/images/products/apple.png",
            seller: "Sigita Sagutė (Admin)",
            sellerImage: "./assets/images/sellers/person1.png"
        },
        {
            name: "Beetroot",
            slug: "beetroot", 
            category: "Vegetables",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat delectus cumque vitae aliquid expedita reiciendis? Amet nesciunt autem veritatis quibusdam repudiandae nemo veniam modi nulla omnis, voluptatem aspernatur non! Ratione fugit tempora excepturi asperiores atque distinctio pariatur animi minima vel totam dolor ducimus blanditiis omnis, ut quam accusantium aspernatur consectetur temporibus dolores unde, harum corrupti amet necessitatibus officia. Officiis.",
            price: "0.49",
            image: "./assets/images/products/beetroot.png",
            seller: "Kotryna Kartutė",
            sellerImage: "./assets/images/sellers/person2.png"
        },
        {
            name: "Melon",
            slug: "melon", 
            category: "Fruits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat delectus cumque vitae aliquid expedita reiciendis? Amet nesciunt autem veritatis quibusdam repudiandae nemo veniam modi nulla omnis, voluptatem aspernatur non! Ratione fugit tempora excepturi asperiores atque distinctio pariatur animi minima vel totam dolor ducimus blanditiis omnis, ut quam accusantium aspernatur consectetur temporibus dolores unde, harum corrupti amet necessitatibus officia. Officiis.",
            price: "1.49",
            image: "./assets/images/products/melon.png",
            seller: "Kotryna Kartutė",
            sellerImage: "./assets/images/sellers/person2.png"
        },
        {
            name: "Strawberry",
            slug: "strawberry", 
            category: "Fruits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat delectus cumque vitae aliquid expedita reiciendis? Amet nesciunt autem veritatis quibusdam repudiandae nemo veniam modi nulla omnis, voluptatem aspernatur non! Ratione fugit tempora excepturi asperiores atque distinctio pariatur animi minima vel totam dolor ducimus blanditiis omnis, ut quam accusantium aspernatur consectetur temporibus dolores unde, harum corrupti amet necessitatibus officia. Officiis.",
            price: "1.49",
            image: "./assets/images/products/strawberry.png",
            seller: "Kotryna Kartutė",
            sellerImage: "./assets/images/sellers/person2.png"
        },
        {
            name: "Tomato",
            slug: "tomato", 
            category: "Vegetables",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat delectus cumque vitae aliquid expedita reiciendis? Amet nesciunt autem veritatis quibusdam repudiandae nemo veniam modi nulla omnis, voluptatem aspernatur non! Ratione fugit tempora excepturi asperiores atque distinctio pariatur animi minima vel totam dolor ducimus blanditiis omnis, ut quam accusantium aspernatur consectetur temporibus dolores unde, harum corrupti amet necessitatibus officia. Officiis.",
            price: "0.99",
            image: "./assets/images/products/tomato.png",
            seller: "Zigmas Žiogas",
            sellerImage: "./assets/images/sellers/person4.png"
        },
        {
            name: "Pumpkin",
            slug: "pumpkin", 
            category: "Vegetable",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat delectus cumque vitae aliquid expedita reiciendis? Amet nesciunt autem veritatis quibusdam repudiandae nemo veniam modi nulla omnis, voluptatem aspernatur non! Ratione fugit tempora excepturi asperiores atque distinctio pariatur animi minima vel totam dolor ducimus blanditiis omnis, ut quam accusantium aspernatur consectetur temporibus dolores unde, harum corrupti amet necessitatibus officia. Officiis.",
            price: "0.49",
            image: "./assets/images/products/pumpkin.png",
            seller: "Zigmas Žiogas",
            sellerImage: "./assets/images/sellers/person4.png"
        },
        {
            name: "Lettuce",
            slug: "lettuce", 
            category: "Vegetables",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat delectus cumque vitae aliquid expedita reiciendis? Amet nesciunt autem veritatis quibusdam repudiandae nemo veniam modi nulla omnis, voluptatem aspernatur non! Ratione fugit tempora excepturi asperiores atque distinctio pariatur animi minima vel totam dolor ducimus blanditiis omnis, ut quam accusantium aspernatur consectetur temporibus dolores unde, harum corrupti amet necessitatibus officia. Officiis.",
            price: "1.39",
            image: "./assets/images/products/lettuce.png",
            seller: "Zigmas Žiogas",
            sellerImage: "./assets/images/sellers/person4.png"
        },
        {
            name: "Potato",
            slug: "potato", 
            category: "Vegetables",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat delectus cumque vitae aliquid expedita reiciendis? Amet nesciunt autem veritatis quibusdam repudiandae nemo veniam modi nulla omnis, voluptatem aspernatur non! Ratione fugit tempora excepturi asperiores atque distinctio pariatur animi minima vel totam dolor ducimus blanditiis omnis, ut quam accusantium aspernatur consectetur temporibus dolores unde, harum corrupti amet necessitatibus officia. Officiis.",
            price: "0.39",
            image: "./assets/images/products/potato.png",
            seller: "Sigita Sagutė (Admin)",
            sellerImage: "./assets/images/sellers/person1.png"
        },
        {
            name: "Carrot",
            slug: "carrot", 
            category: "Vegetables",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat delectus cumque vitae aliquid expedita reiciendis? Amet nesciunt autem veritatis quibusdam repudiandae nemo veniam modi nulla omnis, voluptatem aspernatur non! Ratione fugit tempora excepturi asperiores atque distinctio pariatur animi minima vel totam dolor ducimus blanditiis omnis, ut quam accusantium aspernatur consectetur temporibus dolores unde, harum corrupti amet necessitatibus officia. Officiis.",
            price: "0.39",
            image: "./assets/images/products/carrot.png",
            seller: "Benas Penas",
            sellerImage: "./assets/images/sellers/person3.png"
        },
        {
            name: "Cucumber",
            slug: "cucumber", 
            category: "Vegetables",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat delectus cumque vitae aliquid expedita reiciendis? Amet nesciunt autem veritatis quibusdam repudiandae nemo veniam modi nulla omnis, voluptatem aspernatur non! Ratione fugit tempora excepturi asperiores atque distinctio pariatur animi minima vel totam dolor ducimus blanditiis omnis, ut quam accusantium aspernatur consectetur temporibus dolores unde, harum corrupti amet necessitatibus officia. Officiis.",
            price: "0.79",
            image: "./assets/images/products/cucumber.png",
            seller: "Benas Penas",
            sellerImage: "./assets/images/sellers/person3.png"
        },
        {
            name: "Pear",
            slug: "pear", 
            category: "Fruits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat delectus cumque vitae aliquid expedita reiciendis? Amet nesciunt autem veritatis quibusdam repudiandae nemo veniam modi nulla omnis, voluptatem aspernatur non! Ratione fugit tempora excepturi asperiores atque distinctio pariatur animi minima vel totam dolor ducimus blanditiis omnis, ut quam accusantium aspernatur consectetur temporibus dolores unde, harum corrupti amet necessitatibus officia. Officiis.",
            price: "0.89",
            image: "./assets/images/products/pear.png",
            seller: "Benas Penas",
            sellerImage: "./assets/images/sellers/person3.png"
        }
    ],

}

export default data

//sigita 63614c7f98275a25703fe50a koryna 63614c7f98275a25703fe50b zigmas 63614c7f98275a25703fe50c benas 63614c7f98275a25703fe50d