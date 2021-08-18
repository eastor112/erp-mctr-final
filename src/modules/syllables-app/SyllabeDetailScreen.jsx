import React, { useEffect, useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { startGetSyllabeDetailData } from '../../actions/syllabe-actions'
import { MenuTopPanel } from '../panel/components/MenuTopPanel'
import { SyllabeDetailControls } from './components/SyllabeDetailControls'
import { SyllabeDetailContainer } from './components/SyllabeDetailContainer';

export const SyllabeDetailScreen = () => {

  const { pk } = useParams();
  const dispatch = useDispatch();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const {
    actualSyllabeSummary,
    actualSyllabe,
    professorMedia,
    directorMedia } = useSelector(state => state.syllabe)

  const { token } = useSelector(state => state.auth)


  useEffect(() => {
    dispatch(startGetSyllabeDetailData(pk, token));
  }, [])


  return (
    <>

      <MenuTopPanel />

      {
        Object.keys(actualSyllabeSummary).length !== 0
        &&
        <SyllabeDetailContainer
          actualSyllabeSummary={actualSyllabeSummary}
          actualSyllabe={actualSyllabe}
          professorMedia={professorMedia}
          directorMedia={directorMedia}
          ref={componentRef}
        />
      }

      <SyllabeDetailControls
        handlePrint={handlePrint}
        pk={pk}
        token={token}
      />

    </>
  )
}
