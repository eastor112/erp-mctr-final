import React from 'react';
import { SyllabeDetailBibliography } from './SyllabeDetailBibliography';
import { SyllabeDetailCompetences } from './SyllabeDetailCompetences';
import { SyllabeDetailCounseling } from './SyllabeDetailCounseling';
import { SyllabeDetailDate } from './SyllabeDetailDate';
import { SyllabeDetailEvaluation } from './SyllabeDetailEvaluation';
import { SyllabeDetailGeneralData } from './SyllabeDetailGeneralData';
import { SyllabeDetailHeader } from './SyllabeDetailHeader';
import { SyllabeDetailProgramming } from './SyllabeDetailProgramming';
import { SyllabeDetailSignatures } from './SyllabeDetailSignatures';
import { SyllabeDetailSommelier } from './SyllabeDetailSommelier';

export class SyllabeDetailContainer extends React.PureComponent {
  render() {
    return (
      <div className="silabo__completo" >

        <SyllabeDetailHeader
          program={this.props.actualSyllabeSummary.school}
          courseName={this.props.actualSyllabeSummary.course_name}
        />


        <SyllabeDetailGeneralData
          area={this.props.actualSyllabeSummary.course_category}
          faculty={this.props.actualSyllabeSummary.faculty}
          department={this.props.actualSyllabeSummary.department}
          school={this.props.actualSyllabeSummary.school}
          campus={this.props.actualSyllabeSummary.campus}
          year={this.props.actualSyllabeSummary.syllabe_year}
          semester={this.props.actualSyllabeSummary.syllabe_semester}
          cycle={this.props.actualSyllabeSummary.course_cycle}
          code={this.props.actualSyllabeSummary.course_code}
          section={this.props.actualSyllabeSummary.syllabe_section}
          credits={this.props.actualSyllabeSummary.course_credits}
          prerequisite={this.props.actualSyllabe.course.prerequisite}
          startdate={this.props.actualSyllabe.startdate}
          finishdate={this.props.actualSyllabe.finishdate}
          totalweeks={this.props.actualSyllabe.totalweeks}
          type={this.props.actualSyllabe.course.type}
          regime={this.props.actualSyllabe.course.regime}
          units={this.props.actualSyllabe.units}
          theoryhours={this.props.actualSyllabe.course.theoryhours}
          practicehours={this.props.actualSyllabe.course.practicehours}
          laboratoryhours={this.props.actualSyllabe.course.laboratoryhours}
          principalprofessor={this.props.actualSyllabe.principalprofessor}
          assistantprofessors={this.props.actualSyllabe.assistantprofessors}
        />

        <SyllabeDetailSommelier
          sommelier={this.props.actualSyllabe.course.sommelier}
        />

        <SyllabeDetailCompetences
          generalcompetence={this.props.actualSyllabe.course.generalcompetence}
          specificcompetence={this.props.actualSyllabe.course.specificcompetence}
          unitcompetence={this.props.actualSyllabe.course.unitcompetence}
        />

        <SyllabeDetailProgramming
          units={this.props.actualSyllabe.units}
        />

        <SyllabeDetailEvaluation
          legalbase={this.props.actualSyllabe.legalbase}
          procedures={this.props.actualSyllabe.procedures}
          evaluationdetail={this.props.actualSyllabe.evaluationdetail}
          criteria={this.props.actualSyllabe.criteria}
          achievementlevel={this.props.actualSyllabe.achievementlevel}
        />

        <SyllabeDetailCounseling
          counselingpurpose={this.props.actualSyllabe.counselingpurpose}
          counselingday={this.props.actualSyllabe.counselingday}
          counselinghour={this.props.actualSyllabe.counselinghour}
          counselingplace={this.props.actualSyllabe.counselingplace}
        />

        <SyllabeDetailBibliography
          resources={this.props.actualSyllabe.bibliography.resources}
        />

        <SyllabeDetailDate
          visadate={this.props.actualSyllabe.visadate}
        />

        <SyllabeDetailSignatures
          visa={this.props.actualSyllabe.visa}
          professorSignature={this.props.professorMedia.signature}
          directorSignature={this.props.directorMedia.signature}
        />

      </div>
    );
  }
}