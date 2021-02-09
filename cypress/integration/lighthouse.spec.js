/// <reference types="cypress" />

context('Lighthouse suite', () => {

    it('should generated report and sent email', () => {

        cy.fixture('testdata').then((data) => {

            const report = {
                url: data.url,
                reportPath: data.reportPath,
            }

            cy.task('lighthouseReport', report, {timeout: 120000}).then((reportPath) => {

                const fileData = {
                    folderPath: data.folderPath,
                    zipPath: data.zipPath
                }

                cy.task('zipFolder', fileData).then((zipPath) => {

                    const emailData = {
                        zipPath: zipPath,
                        senderEmail: data.senderEmail,
                        senderPassword: data.senderPassword,
                        receiverEmail: data.receiverEmail,
                        subject: data.subject,
                        text: data.text
                    }

                    cy.task('sendEmail', emailData).then((status) => {
                        console.log("Status: ", status)
                    })

                })

            })

        })

    })

})
