import React from 'react'
import { MenuTopPanel } from './MenuTopPanel'
import dataModules from '../../../data/info-modules-data';
import { ModuleCardPanel } from './ModuleCardPanel';

export const MainContainerPanel = () => {
  return (
    <>
      <MenuTopPanel />

      <section className="panel__contenedor__cards">
        {
          dataModules.map((module) => {
            return <ModuleCardPanel key={module.id} {...module} />
          })
        }

      </section>

    </>
  )
}
