import logo from './logo.svg';
import './App.css';
import {useState, useCallback} from 'react';
import Button from "./src/components/UI/Button";
import ParagraphOutput from "./src/components/Output/ParagraphOutput";


function App() {
    console.log('App component');

    const [isParagraphShow, setIsParagraphShow] = useState(false);

    const toggleParagraph = useCallback(() => {
        setIsParagraphShow(previousISParagraphShow => !previousISParagraphShow);
    }, []);

    return (
        <div className="App">
            <h1>Inside Of React</h1>
            <ParagraphOutput isShown={isParagraphShow}/>
            <Button onClick={toggleParagraph}>Показать / Скрыть</Button>
        </div>
    );
}

export default App;
