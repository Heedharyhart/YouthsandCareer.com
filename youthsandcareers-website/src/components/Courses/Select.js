import './Select.css'
const Select = () => {
    return ( 
        <div className="select-option">
            <p>Select A Faculty</p>
            <div className="options">
                <select>
                   <option value="sciences">SCIENCES</option> 
                   <option value="anatomy">ANATOMY</option>
                   <option value="biochemistry">BIOCEHEMISTRY</option>
                   <option value="biology">biology</option>
                   <option value="computer">computer science</option>
                   <option value="environmental">environmental scienc</option>
                   <option value="microbiology">microbiology</option>
                   <option value="nursing">nursing</option>
                   <option value="pharmacy">pharmacy</option>
                   <option value="dentistry">dentistry</option>
                </select>
            </div>
            <div className="options">
                <select>
                    <option value="arts" disabled>ARTS</option>
                    <option value="law">law</option>
                    <option value="history">history</option>
                    <option value="english">english &amp; literary studies</option>
                    <option value="philosophy">philosophy</option>
                    <option value="music">music &amp; drama</option>
                    <option value="political">political science</option>
                    <option value="languages">languages</option>
                </select>
            </div>
            <div className="options">
                <select>
                    <option value="social"  disabled>SOCIAL SCIENCES</option>
                    <option value="economics">economics</option>
                    <option value="sociology">sociology</option>
                    <option value="psychology">psychology</option>
                    <option value="social">social work</option>
                    <option value="anthropology">anthropology</option>
                    <option value="policitical">policitical science</option>
                    <option value="geography">geography</option>
                </select>
            </div>
            <div className="options">
                <select>
                    <option value="management"  disabled>MANAGEMENT SCIENCES</option>
                    <option value="accounting">accounting</option>
                    <option value="banking">banking and finance</option>
                    <option value="business">business administration</option>
                    <option value="industrial">industrial relation</option>
                    <option value="insurance">insurance</option>
                    <option value="marketing">marketing</option>
                    <option value="public">public administration</option>
                </select>
            </div>
            <div className="options">
                <select>
                    <option value="education" >EDUCATION</option>
                </select>
            </div>
            <div className="options">
                <select>
                    <option value="engineering"  disabled>ENGINEERING</option>
                    <option value="aeronautic">aeronautic engineering</option>
                    <option value="chemical">chemical engineering</option>
                    <option value="civil">civil engineering</option>
                    <option value="computer">computer engineering</option>
                    <option value="mechanical">mechanical engineering</option>
                    <option value="petroleum">petroleum engineering</option>
                    <option value="systems">systems engineering</option>
                </select>
            </div>
        </div>
     );
}
 
export default Select;