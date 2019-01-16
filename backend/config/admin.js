import * as admin from 'firebase-admin';
admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "lab9-flightlogs",
        "private_key_id": "f332e79b42b4e7aa7ba673eeb99fb8904ebc6d0e",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYDdCy5KLqf31H\nQWLzb6FCWnJkSTLnAwL8ilymOaV1HVMRshMFeeI8/zibgjhVScDWHyY/fXZRHNu1\nqbUELito8XVbd7Tf+6LwSku+h85aPOIhPQY8jcQWcrGYlGT/AE5VUa5N9lN2j2wP\ncNTmwwaEepyQjfJgahyzT5dsEFdmaJWSkY90ipwod6W4hgX/DtU1mxfeFD+SnIh/\nSCJGFWhzIKLvgTengdY1pt1GgrP6XIUWqKjFTaQ6NW05SdZsDLCK4NDYijDWuW/U\nheEMB8hiE0cbg1ON8faWe+g3WAxBxcpEF2KC+h/fz8rWUEJ+BIviJgKhtgylCA/A\nnTLcgERHAgMBAAECggEABlymD0Gl0Htf2qr8Fg+BkbXfop3D30qkPp/6R6AvDhzE\nCtVxRRONYjiFDDNL4m4YDXZToNqI739R4rDEdRInA5iMevu+RHgukemMjImHxOjk\nqlRbJSqtiF6wdzxWr3I6OF4zeRRevtar7vIfHIVH3yPonaKeVZILA0K5pSACk7NT\n31w+AvmCVBqbBNGszpZwfmwRhp3u4QtUcaW5ZS47OJFVmReCPJHzoRkcA8vlKiBW\nXvhP04hyXbUq7CurBYtjnMsR982jmozz559nAkKYxzYbCQg08Ak0ktxTcgFYk1hd\nGi57eOmVjCFem4vgMszLkDrJV0+UiBxgxqqj5ZF1xQKBgQDQRlF3vex8tQ/A9vcC\n+Jcv8jeJhwiyO4lyXaTH99RpS3cJEpamiD+j0NzlcAEPJyXb38N92Ddrt6MkSM8m\nFzWz4dFdG8SyQTkAir9APdAuPy3AdDdiSEQio8UnP0SnsnCbzq/zN2fPMlyOSXIQ\nlSDPF8Pjeyzng+eiYg0+bmdSRQKBgQC65YMIpX/nG4Slxpz2cETETD3xFSrf/gkj\ns7IJmrRVCh57wX/xv4fjMtGXp3YI0pibXk1fOPlPIrUp6CllLqSUDGEGXz7Ipd7v\ndchFOsKCPQRtE017Bhuaxiy3rLeHXukB4pOB4OwptegzShs1jhzQdh5ceA/873T1\n08t2CrUrGwKBgBlep2fNk7PxHjUkIByViV0GxSsUbsO/KtPqgjr1fkNBNQO+5ujs\nKcxbkbzE8uwUmbD5xcdbggy19sJhuBHsu9boh+cujbwk47ukKv25SdWITptlzKVF\nJj+N8WMBeuxuePcRqy8WLaf4e3u9iI5qi++N9oeMJoEg+SM3jGNxcVZ9AoGBAJki\naMTy5eO0tnEmVYHO52l3luEsGN9DRLXODLi128A59FQubejkqDDOeNEr0xjThVr4\nX6kAA7aFl67onNJc71im8/DGpai9z/agqSGgTbNsz22X/Uop7QBaFFXC3PW8HGsA\n/R/T7W0XsVQlCjpNYOqlfacCcQcsJMcvbGwhxeO1AoGACtcCv/DkWjhBfJpIjnqq\n+pSXt2/U0M7sT7v1W8AIP0w7Tk4pAxBIKBxx0gDCP2nD2Sh4Rz+jW3GSohiYM/aL\nT1Lv974rcRaFmr8WxQ3NxjmgllzaouZIZhHUwR4wq59fkJCeXypb9dXBCdV4oX74\n90VGE4XgFDwvx63JOoOfVfk=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-eyma0@lab9-flightlogs.iam.gserviceaccount.com",
        "client_id": "108912208589238471922",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eyma0%40lab9-flightlogs.iam.gserviceaccount.com"
      
    })
})