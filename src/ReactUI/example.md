This is an example:

    const elementStyle = {
        width: '50px',
        height: '50px',
        margin: '10px',
    };
    const rawPath = "https://raw.githubusercontent.com/lotteryjs/slots/master/examples/ReactUI/img";
    const items = [
        <img key='apple' src={`${rawPath}/apple.png`} style={elementStyle} alt=''/>,
        <img key='aubergine' src={`${rawPath}/aubergine.png`} style={elementStyle} alt=''/>,
        <img key='carrot' src={`${rawPath}/carrot.png`} style={elementStyle} alt=''/>,
        <img key='cheese' src={`${rawPath}/cheese.png`} style={elementStyle} alt=''/>,
        <img key='fries' src={`${rawPath}/fries.png`} style={elementStyle} alt=''/>,
        <img key='grapes' src={`${rawPath}/grapes.png`} style={elementStyle} alt=''/>,
        <img key='groceries' src={`${rawPath}/groceries.png`} style={elementStyle} alt=''/>,
        <img key='lemon' src={`${rawPath}/lemon.png`} style={elementStyle} alt=''/>,
        <img key='orange' src={`${rawPath}/orange.png`} style={elementStyle} alt=''/>,
        <img key='pineapple' src={`${rawPath}/pineapple.png`} style={elementStyle} alt=''/>,
        <img key='salad' src={`${rawPath}/salad.png`} style={elementStyle} alt=''/>,
        <img key='sandwich' src={`${rawPath}/sandwich.png`} style={elementStyle} alt=''/>,
    ];
    const buttonStyle = {
        position: 'absolute',
        top: '80px',
        left: '80px',
        width: '120px',
        height: '120px',
    };
    const button = <img src={`${rawPath}/start.png`} style={buttonStyle} alt='' />;
    const activeStyle = {
        background: 'orange',
    };
    <SlotsComponent finalIndex={5} items={items} elementStyle={elementStyle} activeStyle={activeStyle} button={button} />
