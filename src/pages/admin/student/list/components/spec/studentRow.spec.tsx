import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { StudentSummary } from '../../../../../../model/studentSummary'
import { StudentRowComponent } from '../studentRow'

describe('StudentRowComponent', () => {

  it('should be defined', () => {
    // Arrange
    const student = new StudentSummary();
    student.id = 1;
    student.fullname = 'john';
    student.email = "mail@mail.com";


    // Act
    const studentRowComponent = shallow(
      <StudentRowComponent student={student}/>
    )

    // Assert
    expect(studentRowComponent).not.to.be.undefined;
  });

  it('should render the student name', () => {
    // Arrange
    const student = new StudentSummary();
    student.id = 1;
    student.fullname = 'john';
    student.email = "mail@mail.com";

    // Act
    const studentRowComponent = shallow(
      <StudentRowComponent student={student}/>
    )

    // Assert
    const expectedDomTree = `
      <tr>
        <td>
          <span>
            john
          </span>
        </td>
        <td>
          <span>
            mail@mail.com
          </span>
        </td>
      </tr>
      `;

    const plainDomTree = expectedDomTree.replace(/(?:\r\n|\r|\n|\s)/g, '')

    expect(studentRowComponent.html()).to.be.equal(plainDomTree);

  })

});