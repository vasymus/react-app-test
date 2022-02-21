import accordion from "./accordion";

function AppSidebar (props) {
    let {openItemId, toggleOpenItem, bgColor, changeBgColor, text, changeText} = props
    return (
        <div className="App-sidebar">
            <div className="accordion" id="accordionExample">
                <div className={`card ${openItemId === 'contentInput' && 'flex-grow-1'}`}>
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" onClick={toggleOpenItem('contentInput')}  type="button">
                                Text
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" className="collapse show">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="contentInput">Example textarea</label>
                                <textarea className="form-control" id="contentInput" rows="3" value={text} onChange={changeText} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" onClick={toggleOpenItem('bgColor')} type="button">
                                BG color
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className={`collapse ${openItemId === 'bgColor' && 'show'}`}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="bgColor">Background color</label>
                                <input type="text" className="form-control" id="bgColor" value={bgColor} onChange={changeBgColor} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default accordion(AppSidebar)
