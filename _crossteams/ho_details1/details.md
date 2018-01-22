---
layout: master
include: default
permalink: /crossteams/ho_details1/
name: details
---

<h3>Services for sharing and exploring large datasets</h3>

<h4>Goals</h4>

The goal of this session is to share experience and find synergies between several NeIC projects about managing. 
For example, the NT1 project (LHC experiments) will share its experience in managing and distributing large datasets and the NICEST project will show how to use ESGF (Earth System Grid Federation) collaborative environment to support distributed, complex, multi-part projects data sharing.
  
 And what about your project? Any experience with data publishing, sharing, archiving? Come and share your experience!

<h4>Practical information</h4>

- Length of the session: 15:45-17:00
- Requirements: Give your inputs by completing [this survey (https://qtrial2018q1az1.az1.qualtrics.com/jfe/form/SV_54sPm0hgS5nTfZb)]


<h4>Learning outcomes</h4>

    - Get an overview of Data services for Earth System data/NT1
    - Understand how to publish Earth System data on ESGF nodes
    - Share and exchange know-how with other NeIC projects

<h4>Terminology</h4>

This section attempts to provide some definition related to data management. It is common to breaks down data management workflows into four broad categories:

**Archival**: Moving non-reproducible data from an instrument (such as a detector) to a long-term storage (archival) site.  Once the data is at the archive, we assume it can be recalled within 48 hours.
**Replica-based**: Management of storage where the data (contents and lifetime) is managed by the experiment.  File replicas must be explicitly created - possibly with a max lifetime - and are expected to be accessible from that storage until the file expires or is explicitly deleted.
**Cache-based**: Data located at a storage service whose lifetime is decided by the storage service itself.  Caches may be populated on first-use or via a prefetch mechanism.
**Compute-Workflow-based**: Data is moved to/from the job sandbox as part of the compute workflow. 
The replica-, cache-, and compute-workflow-based workflows support data delivery to batch jobs, while archival does not.
Workflow management system (WfMS): allow the user to define different workflows for different types of jobs or processes.

**Storage Element**: a POSIX-like (exposes a hierarchical file / directory structure) storage service that exposes POSIX-like APIs (read / write / open / close / stat) as Internet-facing RPCs.
Object storage: A S3-like storage service.  Storage is organized into “buckets” (a non-hierarchical container) and “objects” and exposes HTTP GET / PUT -style APIs.

**File Transfer Service**: A networked service that manages file transfers between storage services in a manner analogous to a batch system.  A request to perform a transfer (“copy file XYZ at storage element A to storage element B”) can be enqueued, monitored for completion, and/or cancelled.  The file transfer service centrally manages the load placed on the storage elements and decides on the transfer order.

**Replica Management Service**: A service that manages file replicas according to some high-level policy.  Typically,
Managed files are grouped into logical groups, allowing policies to be set at a coarser granularity than files.
Policies can be high-level (“keep three on-disk copies of this dataset”) or low-level (“move dataset A to storage XYZ”).
The replica management service triggers the creation of new replicas via a file transfer service.

**Storage Management**: Management of space-related resources at a storage service.  This involves enforcement of space usage policies (such as quotas or allocations) and expiration of file replicas that are past their lifetimes.
Depending on the model used, management of storage resources can be done by a central service, the storage services, or both.

**Metadata**: is "data that provides information about other data"
