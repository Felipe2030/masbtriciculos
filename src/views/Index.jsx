import React from "react";
import Content from "./../components/content/Content";

function Index() {
    return <div className="index">
       <Content>
           <div className="conatiner_title">
                <span>Listagem de Produtos:</span>
                <div className="linha"></div>
           </div>
           <div className="container_postagem">
            <img src="https://import.cdn.thinkific.com/220759/QMSHgkP4QuGm1HBHNSlc_teamwork_png" srcset="https://import.cdn.thinkific.com/220759/QMSHgkP4QuGm1HBHNSlc_teamwork_png?width=600 1x, https://import.cdn.thinkific.com/220759/QMSHgkP4QuGm1HBHNSlc_teamwork_png?width=600&amp;dpr=2 2x, https://import.cdn.thinkific.com/220759/QMSHgkP4QuGm1HBHNSlc_teamwork_png?width=600&amp;dpr=3 3x" alt="" class="img-responsive" loading="lazy" />
           </div>
       </Content>
    </div>
}

export default Index;