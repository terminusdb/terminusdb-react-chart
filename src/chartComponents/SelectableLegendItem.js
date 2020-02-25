import React from 'react';
import  {Surface, Symbols} from  "recharts";

const SelectableLegendItem = (props) => {

		const { dataKey, style, label } = this.props || {dataKey:'No Key', style:{}, label:'No Label'};
    const {fill, stroke} = style;

    const color = fill || stroke;

		const mylabel = label || dataKey;
    let currentStyle = {}
    let opacity = 1// 0.5;
    if (this.props.selectObject && this.props.selectObject === true) {
      currentStyle = { fontWeight: 800}
      opacity=1;
    }
      return (           
          <span className="legend-item" onClick={this.props.onClick} style={currentStyle}>
            <Surface width={10} height={10}>
              <Symbols cx={5} cy={5} type="circle" size={100} fill={color} opacity={opacity} />
            </Surface>
            <span style={{marginLeft:'5px'}}>{mylabel}mmmmm</span>
          </span>
      )
}

export default SelectableLegendItem

