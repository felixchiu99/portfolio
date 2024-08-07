import React from "react";
import './Collapsible.css';
class HidableWTag extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                open: true
            }
        this.togglePanel = this.togglePanel.bind(this);
        this.checkTags();
    }

    checkTags() {
        if (this.props.tags) {
            if (this.props.selectedTag === "None") {
                this.setState({ open: true });
            } else if (this.props.tags.includes(this.props.selectedTag)) {
                this.setState({ open: true });
            } else {
                this.setState({ open: false });
            }
        }
            
    }

    componentDidUpdate(prevProps) {
        // do something
        if (prevProps === this.props)
            return;

        this.checkTags();
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }
    
    render() {
        return (<div>
            {this.state.open ? (
                <>
                    {this.props.children}
                </>
            ) : null}
            </div>
        );
    }
}
export default HidableWTag;

