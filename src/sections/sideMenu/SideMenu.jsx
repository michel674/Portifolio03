import React ,{Fragment} from 'react';
import {H1,H2,H3,H4, H5, P} from '../../components/typography';
import {Spacing, HorizontalSpacing, Section,Box} from '../../components/box';
import {SideSection, A, Li, Ul, I, Copy, DotTitle,CenterSpan} from './SideMenuStyle';
import {ContactLink} from '../formSection/FormSection';
import {Container, Column, Row} from '../../components/Grid'


function SideMenu(){
    return(
        <SideSection backgroundColor={true}>
			<Container>
				<Spacing/>
				<Spacing/>
				<Row center={true}>
					<Column align={'center'}>
						<H1>Michel<DotTitle>.</DotTitle></H1>
					</Column>
				</Row>
					<Spacing/>
					<Spacing/>
					<Spacing/>

				<Row>
					<Column>

						<Ul>
							<Li><A href=""><I><i class="fas fa-brain"></i></I><H5>Habilidades</H5></A></Li>
							<Spacing/>
							<Spacing/>
							<Li><A href=""><I><i class="fas fa-graduation-cap"></i></I><H5>Experiências</H5></A></Li>
							<Spacing/>
							<Spacing/>
							<Li><A href=""><I><i class="fas fa-book"></i></I><H5>Projetos</H5></A></Li>
							<Spacing/>
							<Spacing/>
							<Li><A href=""><I><i class="fas fa-envelope"></i></I><H5>Contato</H5></A></Li>
							<Spacing/>
							<Spacing/>
							<Spacing/>
						</Ul>
					</Column>
				</Row>
			</Container>


						<Spacing/>
						<Spacing/>
						<Spacing/>
						
					
				

			<Copy class="copyright">&copy; Michel Elesbão</Copy>
			
			
        </SideSection>

    )
}
export {SideMenu};