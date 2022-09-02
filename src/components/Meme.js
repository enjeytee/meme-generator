import React from "react"
// import memesData from "../memeData"

function Meme () {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    // const [allMemes, setallMemes] = React.useState(memesData) * USED BEFORE FETCH *
    const [allMemes, setAllMemes] = React.useState([])


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                // setAllMemes(data) * MY SOLUTION *
                setAllMemes(data.data.memes)
            })
    }, [])


    /* TO USE ASYNC FUNCTION */
    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    // }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function getMemeImage() {
            // const memesArray = allMemes.data.memes * MY SOLUTION *
            // const randomNumber = Math.floor(Math.random() * memesArray.length) * MY SOLUTION *
            const randomNumber = Math.floor(Math.random() * allMemes.length)
            // const url =  memesArray[randomNumber].url * MY SOLUTION
            const url = allMemes[randomNumber].url
            setMeme(prevMeme => {
                return {
                    ...prevMeme,
                    randomImage: url
                }
            })
                
    }

    return (
        <main>
            <div className="form">
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>         
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage}></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme



// const [result, setResult] = React.useState("Yes")

// function addItem() {
//     // We'll work on this next
//     setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
// }

// function App() {
//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
//     function addItem() {
//         // We'll work on this next
//         setThingsArray(prevThingsArray => {
//             return [...prevThingsArry, `Thing ${prevThingsArray.length + 1}`]
//         })
//     } 
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }

// function toggleFavorite() {
//     setContact(prevContact => {
//         return {
//             ...prevContact,
//             isFavorite: !prevContact.isFavorite
//         }
//     })
// }

// test