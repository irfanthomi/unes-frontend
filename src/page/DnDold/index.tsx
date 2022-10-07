
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Container } from './Container';

function DnD() {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <Container />
            </DndProvider>
        </div>
    )
}
export default DnD;
