import Navbar from "./Navbar";
function MainPage(props: any) {

    return (
        <>
            <Navbar >

                {props.children}
            </Navbar>
        </>
    );
}
export default MainPage;